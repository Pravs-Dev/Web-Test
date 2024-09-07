const request = require('supertest');
const app = require('./app.js'); 

describe('GET /', () => {
  it('should return "hello from me"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from me');
  });
});
