const { spec } = require('pactum');

describe('Create register succesful', () => {
    it('POST', async() => {
        const getUrl = 'https://reqres.in';
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
});