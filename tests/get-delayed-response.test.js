const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Read delayed response suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('GET delayed response', async() => {
        await spec()
        .get(getUrl + '/api/users?delay=3')
        .expectStatus(200);
    });
});
