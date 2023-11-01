const { spec } = require('pactum');

describe('Create login succesful', () => {
    it('POST', async() => {
        const getUrl = 'https://reqres.in';
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
});