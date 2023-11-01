const { spec } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Read delayed response suite test', () => {
    it('GET delayed response', async() => {
        await spec()
        .get(getUrl + '/api/users?delay=3')
        .withRequestTimeout(50000)
        .expectStatus(200);
    });
});
