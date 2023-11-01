const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const getUrl = 'https://reqres.in';
let getRandomEmail = faker.internet.email();

describe('Create register suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('POST register successful', async() => {
        await spec()
        .post(getUrl + '/api/register')
        .withJson(
            {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
            }
          )
        .expectStatus(200);
    });

    it('POST register unsuccessful', async() => {
        await spec()
        .post(getUrl + '/api/register')
        .withJson(
            {
            "email": getRandomEmail,
            }
          )
        .expectStatus(400);
    });
});
