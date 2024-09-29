// tests/book.test.js
const request = require('supertest');
const app = require('../app');

describe('Book API', () => {
  it('should fetch all books', async () => {
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
