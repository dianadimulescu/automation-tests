const { spec } = require('pactum');

describe('Read single user not found', () => {
    it('GET single user not found', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/users/23')
        .expectStatus(404);
    });
});