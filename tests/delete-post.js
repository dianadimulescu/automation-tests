const { spec } = require('pactum');

describe('Delete post', () => {
    it('DELETE', async() => {
        const getUrl = 'https://reqres.in'
        await spec()
        .delete(getUrl + '/api/users/2')
        .expectStatus(204);
    });
});