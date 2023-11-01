const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Update post suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('PUT post', async() => {
        await spec()
        .put(getUrl + '/api/users/2')
        .withBody(`
            {
            "name": "morpheus",
            "job": "zion resident"
            }
        `)
        .expectStatus(200);
    });
});
