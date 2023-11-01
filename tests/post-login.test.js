const { spec, request } = require('pactum');
const { faker } = require('@faker-js/faker');
const getUrl = 'https://reqres.in';
const getRandomEmail = faker.internet.email();

describe('Create login suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('POST login sucssesful', async() => {
        await spec()
        .post(getUrl + '/api/login')
        .withJson(
            {
             "email": "eve.holt@reqres.in",
             "password": "cityslicka"
            }
          )
        .expectStatus(200);
    });

    it('POST login unsuccessful', async() => {
        await spec()
        .post(getUrl + '/api/login')
        .withJson(
            {
            "email": getRandomEmail,
            }
          )
        .expectStatus(400);
    });
});
