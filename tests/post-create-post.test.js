const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Create post suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });

    it('POST post', async() => {
        await spec()
        .post(getUrl + '/api/users')
        .withBody(`
            {
            "name": "morpheus",
            "job": "leader"
            }
        `)
        .expectStatus(201);
    });
});
