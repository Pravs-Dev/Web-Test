const request = require('supertest');
const app = require('./app.js');
const mongoose = require('mongoose'); // Import mongoose

describe('GET /', () => {
  it('should return "hello from me"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('hello from me');
  });

  // Ensure Mongoose connection is closed after all tests
  afterAll(async () => {
    await mongoose.connection.close();  // Close the database connection
  });
});
