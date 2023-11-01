const { spec } = require('pactum');

describe('Read delayed responde', () => {
    it('GET delayed response', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .get(getUrl + '/api/users?delay=3')
        .withRequestTimeout(50000)
        .expectStatus(200);
    });
});