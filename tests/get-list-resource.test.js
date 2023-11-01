const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in'

describe('Read list resource suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('GET list resource', async() => {
        await spec()
        .get(getUrl + '/api/unknown')
        .expectStatus(200);
    });
});
