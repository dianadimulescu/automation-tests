const { spec } = require('pactum');
const { faker } = require('@faker-js/faker');

describe('Create register unsuccesful', () => {
    it('POST', async() => {
        const getUrl = 'https://reqres.in';
        let getRandomEmail = faker.internet.email();
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