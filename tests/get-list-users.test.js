const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Read list users', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('GET list users', async() => {
        await spec()
        .get(getUrl + '/api/users?page=2')
        .expectStatus(200);
    });
});
