const request = require('supertest');
const app = require('./app.js');
const server = require('./server.js'); // Import the server to close later

describe('GET /', () => {
  it('should return "hello from me"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from me');
  });

  // Close the server after all tests
  afterAll(async () => {
    await mongoose.connection.close();  // Close the database connection
    server.close(); // Close the server
  });
});
