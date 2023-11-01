const { spec } = require('pactum');

describe('Read list resource', () => {
    it('GET list resource', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/unknown')
        .expectStatus(200);
    });
});