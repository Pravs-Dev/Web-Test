const request = require('supertest');
const app = require('./app.js');
const mongoose = require('mongoose'); // Import mongoose to close the connection

describe('GET /', () => {
  it('should return "hello from me"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from me');
  });

  // Ensure the server and DB connections close after the test
  afterAll(async () => {
    await mongoose.connection.close();  // Close the Mongoose connection
  });
});
