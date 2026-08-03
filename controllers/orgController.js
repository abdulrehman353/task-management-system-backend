const { Organization, OrganizationMember, User } = require('../models');

// 1. Assign User to Organization
exports.assignMember = async (req, res) => {
  try {
    const { id } = req.params; // Organization ID
    const { UserID, RoleID } = req.body;

    // Check if membership already exists
    const existingMember = await OrganizationMember.findOne({
      where: { OrganizationID: id, UserID }
    });

    if (existingMember) {
      return res.status(400).json({ message: 'User is already a member of this organization.' });
    }

    const newMember = await OrganizationMember.create({
      OrganizationID: id,
      UserID,
      RoleID: RoleID || null
    });

    return res.status(201).json({
      message: 'User assigned to organization successfully.',
      data: newMember
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error assigning user to organization', error: error.message });
  }
};

// 2. Remove User from Organization
exports.removeMember = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const deletedCount = await OrganizationMember.destroy({
      where: { OrganizationID: id, UserID: userId }
    });

    if (!deletedCount) {
      return res.status(404).json({ message: 'Member not found in this organization.' });
    }

    return res.status(200).json({ message: 'User removed from organization successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Error removing user from organization', error: error.message });
  }
};

// 3. Transfer Organization Ownership
exports.transferOwnership = async (req, res) => {
  try {
    const { id } = req.params; // Organization ID
    const { newOwnerId } = req.body;

    const org = await Organization.findByPk(id);
    if (!org) {
      return res.status(404).json({ message: 'Organization not found.' });
    }

    // Verify new owner exists
    const newOwner = await User.findByPk(newOwnerId);
    if (!newOwner) {
      return res.status(404).json({ message: 'New owner user not found.' });
    }

    // Update CreatedBy / Owner field
    org.CreatedBy = newOwnerId;
    await org.save();

    return res.status(200).json({
      message: 'Organization ownership transferred successfully.',
      data: org
    });
  } catch (error) {
    return res.status(500).json({ message: 'Error transferring ownership', error: error.message });
  }
};