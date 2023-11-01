const { spec } = require('pactum');

describe('Read single resource', () => {
    it('GET single resource', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/unknown/2')
        .expectStatus(200);
    });
});