const { spec } = require('pactum');

describe('Udate post', () => {
    it('PUT', async() => {
        const getUrl = 'https://reqres.in'
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