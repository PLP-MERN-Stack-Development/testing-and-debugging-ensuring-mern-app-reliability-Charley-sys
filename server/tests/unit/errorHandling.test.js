const request = require('supertest');
const app = require('../../src/server');

describe('Error Handling Tests', () => {
  it('should handle invalid JSON in request body', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .set('Content-Type', 'application/json')
      .send('invalid json')
      .expect(400);
  });

  it('should handle server errors gracefully', async () => {
    // This tests your error handling middleware
    const response = await request(app)
      .get('/api/nonexistent')
      .expect(404);
    
    expect(response.body.success).toBe(false);
  });
});