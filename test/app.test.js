const request = require('supertest');
const app = require('../app');

test('GET / debe devolver Hola Mundo', async () => {
  const res = await request(app).get('/');
  expect(res.text).toBe('Hola Mundo DevOps 🚀');
});