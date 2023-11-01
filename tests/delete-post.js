const { spec } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Delete post suite test', () => {
    it('DELETE post', async() => {
        await spec()
            .delete(getUrl + '/api/users/2')
            .expectStatus(204);
    });
});
