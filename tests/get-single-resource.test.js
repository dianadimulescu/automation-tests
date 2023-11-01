const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in/api/unknown';

describe('Read single resource suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('GET single resource', async() => {
        await spec()
        .get(getUrl + '/2')
        .expectStatus(200);
    });

    it('GET single resource not found', async() => {
        await spec()
        .get(getUrl + '/99999999999999')
        .expectStatus(404);
    });
});
