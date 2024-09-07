const request = require('supertest');
const { app, mongoose } = require('./app.js');  // Import mongoose along with the app
const server = require('./server.js');  // Import the server

describe('GET /', () => {
  it('should return "hello from me"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('hello from me');
  });

  afterAll(async () => {
    await mongoose.connection.close();  // Close the database connection
    server.close();  // Close the server
  });
});
