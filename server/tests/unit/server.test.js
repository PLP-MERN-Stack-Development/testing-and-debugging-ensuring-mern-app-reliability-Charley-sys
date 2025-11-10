const request = require('supertest');
const app = require('../../src/server');

describe('Server Unit Tests', () => {
  it('should return health check message', async () => {
    const response = await request(app)
      .get('/api/health')
      .expect(200);

    expect(response.body.message).toBe('Server is running!');
    expect(response.body.status).toBe('OK');
    expect(response.body).toHaveProperty('timestamp');
  });

  it('should handle 404 routes', async () => {
    const response = await request(app)
      .get('/api/nonexistent-route')
      .expect(404);

    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe('Route not found');
  });
});