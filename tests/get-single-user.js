const { spec } = require('pactum');

describe('Read single user', () => {
    it('GET single user', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/user/2')
        .expectStatus(200);
    });
});