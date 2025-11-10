// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-jwt-secret-for-testing-only';
process.env.PORT = '5001';

// Increase timeout for MongoDB operations
jest.setTimeout(30000);

// Global test setup
beforeAll(async () => {
  console.log('Starting server test suite...');
});

// Global test teardown
afterAll(async () => {
  console.log('Server test suite completed.');
});