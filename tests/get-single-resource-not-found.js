const { spec } = require('pactum');

describe('Read single resource not found', () => {
    it('GET single resource not found', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/unknown/23')
        .expectStatus(404);
    });
});