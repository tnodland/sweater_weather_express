var shell = require('shelljs');
var request = require('supertest');
var app = require('../app');

describe('api', () => {
  beforeAll (() => {
    shell.exec('npx sequelize db:create')
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:migrate');
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
  })

  describe ("User can be created", () => {
    test('should return a 201', ()=> {
      return request(app).get('/api/vi/users').then(response => {
        expect(response.statusCode).toBe(201)
      })
    })
  })
})
