const { spec } = require('pactum');

describe('Udate post', () => {
    it('PATCH', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .patch(getUrl + '/api/users/2')
        .withBody(`
            {
            "name": "morpheus",
            "job": "zion resident"
            }
        `)
        .expectStatus(200);
    });
});