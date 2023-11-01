const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in';

describe('Delete post suite test', () => {
    before(() => {
        request.setDefaultTimeout(2000);
    });

    it('DELETE post', async() => {
        await spec()
            .delete(getUrl + '/api/users/2')
            .expectStatus(204);
    });
});
