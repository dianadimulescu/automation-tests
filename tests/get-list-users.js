const { spec } = require('pactum');

describe('Read list users', () => {
    it('GET list users', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/users?page=2')
        .expectStatus(200);
    });
});