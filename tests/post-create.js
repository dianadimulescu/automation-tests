const { spec } = require('pactum');

describe('Create post', () => {
    it('POST', async() => {
        const getUrl = 'https://reqres.in'
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