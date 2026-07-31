const { Organization, User, OrganizationMember } = require('../models');

// 1. Create Organization (With Logo & Theme)
exports.createOrganization = async (req, res) => {
  try {
    const { Name, Email, ContactNo, Theme } = req.body;
    const Logo = req.file ? req.file.path : null;

    const org = await Organization.create({
      Name,
      Email,
      ContactNo,
      Theme: Theme || '#ffffff',
      Logo
    });

    res.status(201).json({ message: 'Organization created successfully', organization: org });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 2. Update Organization (Details, Logo & Theme)
exports.updateOrganization = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Email, ContactNo, Theme } = req.body;

    const org = await Organization.findByPk(id);
    if (!org) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    if (Name) org.Name = Name;
    if (Email) org.Email = Email;
    if (ContactNo) org.ContactNo = ContactNo;
    if (Theme) org.Theme = Theme;
    if (req.file) org.Logo = req.file.path;

    await org.save();

    res.status(200).json({ message: 'Organization updated successfully', organization: org });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 3. Delete Organization
exports.deleteOrganization = async (req, res) => {
  try {
    const { id } = req.params;

    const org = await Organization.findByPk(id);
    if (!org) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    await org.destroy();
    res.status(200).json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// 4. Assign User to Organization
exports.assignUserToOrg = async (req, res) => {
  try {
    const { id } = req.params; // OrganizationID
    const { UserID, RoleID } = req.body;

    const org = await Organization.findByPk(id);
    if (!org) {
      return res.status(404).json({ message: 'Organization not found' });
    }

    const user = await User.findByPk(UserID);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assign via OrganizationMember junction table
    const member = await OrganizationMember.create({
      OrganizationID: id,
      UserID,
      RoleID: RoleID || null
    });

    res.status(201).json({ message: 'User assigned to Organization successfully', member });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};