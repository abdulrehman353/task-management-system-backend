const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Task Management System API',
    description: 'REST API Documentation for Task Management System',
    version: '1.0.0',
  },
  host: 'localhost:5000',
  schemes: ['http', 'https'],
  tags: [
    { name: 'Users', description: 'User Management APIs' },
    { name: 'Tasks', description: 'Task Management APIs' },
    { name: 'Projects', description: 'Project Management APIs' },
    { name: 'Organization', description: 'Organization Management APIs' },
    { name: 'Organization Members', description: 'Organization Member Management APIs' },
    { name: 'Authentication', description: 'User Authentication APIs' },
    { name: 'Attachments', description: 'Attachment Management APIs' },
    { name: 'Activity History', description: 'Activity History Management APIs' }
  ],
  paths: {
    // --- USERS ---
    '/api/users': {
      get: { tags: ['Users'], summary: 'Get all users', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Users'], summary: 'Create a new user', responses: { 201: { description: 'Created' } } }
    },
    '/api/users/{id}': {
      get: { tags: ['Users'], summary: 'Get user by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Users'], summary: 'Update user', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Users'], summary: 'Delete user', responses: { 200: { description: 'OK' } } }
    },

    // --- TASKS ---
    '/api/tasks': {
      get: { tags: ['Tasks'], summary: 'Get all tasks', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Tasks'], summary: 'Create a new task', responses: { 201: { description: 'Created' } } }
    },
    '/api/tasks/{id}': {
      get: { tags: ['Tasks'], summary: 'Get task by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Tasks'], summary: 'Update task', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Tasks'], summary: 'Delete task', responses: { 200: { description: 'OK' } } }
    },

    // --- PROJECTS ---
    '/api/projects': {
      get: { tags: ['Projects'], summary: 'Get all projects', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Projects'], summary: 'Create a new project', responses: { 201: { description: 'Created' } } }
    },
    '/api/projects/{id}': {
      get: { tags: ['Projects'], summary: 'Get project by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Projects'], summary: 'Update project', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Projects'], summary: 'Delete project', responses: { 200: { description: 'OK' } } }
    },

    // --- ORGANIZATION ---
    '/api/organizations': {
      get: { tags: ['Organization'], summary: 'Get all organizations', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Organization'], summary: 'Create a new organization', responses: { 201: { description: 'Created' } } }
    },
    '/api/organizations/{id}': {
      get: { tags: ['Organization'], summary: 'Get organization by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Organization'], summary: 'Update an organization', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Organization'], summary: 'Delete an organization', responses: { 200: { description: 'OK' } } }
    },

    // --- ORGANIZATION MEMBERS ---
    '/api/organization-members': {
      get: { tags: ['Organization Members'], summary: 'Get all organization members', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Organization Members'], summary: 'Assign a user to an organization', responses: { 201: { description: 'Created' } } }
    },
    '/api/organization-members/{id}': {
      get: { tags: ['Organization Members'], summary: 'Get organization member by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Organization Members'], summary: 'Update organization member', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Organization Members'], summary: 'Delete organization member', responses: { 200: { description: 'OK' } } }
    },

    // --- AUTHENTICATION ---
    '/api/auth/signup': {
      post: { tags: ['Authentication'], summary: 'Register a new user', responses: { 201: { description: 'Created' } } }
    },
    '/api/auth/login': {
      post: { tags: ['Authentication'], summary: 'Login user', responses: { 200: { description: 'OK' } } }
    },

    // --- ATTACHMENTS ---
    '/api/attachments': {
      get: { tags: ['Attachments'], summary: 'Get all attachments', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Attachments'], summary: 'Create a new attachment', responses: { 201: { description: 'Created' } } }
    },
    '/api/attachments/{id}': {
      get: { tags: ['Attachments'], summary: 'Get attachment by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Attachments'], summary: 'Update attachment', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Attachments'], summary: 'Delete attachment', responses: { 200: { description: 'OK' } } }
    },

    // --- ACTIVITY HISTORY ---
    '/api/activity-history': {
      get: { tags: ['Activity History'], summary: 'Get all activity history records', responses: { 200: { description: 'OK' } } },
      post: { tags: ['Activity History'], summary: 'Create a new activity record', responses: { 201: { description: 'Created' } } }
    },
    '/api/activity-history/{id}': {
      get: { tags: ['Activity History'], summary: 'Get activity history by ID', responses: { 200: { description: 'OK' } } },
      put: { tags: ['Activity History'], summary: 'Update activity history', responses: { 200: { description: 'OK' } } },
      delete: { tags: ['Activity History'], summary: 'Delete activity history', responses: { 200: { description: 'OK' } } }
    }
  }
};

const outputFile = './swagger-output.json';
const endpointsFiles = []; // Direct JSON mapping use ho rahi hai

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log('Swagger Documentation Generated Successfully!');
});