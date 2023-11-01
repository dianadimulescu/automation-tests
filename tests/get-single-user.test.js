const { spec, request } = require('pactum');
const getUrl = 'https://reqres.in/api/users';

describe('Read single user suite test', () => {
    before(() => {
        request.setDefaultTimeout(10000);
    });
    
    it('GET single user', async() => {
        await spec()
        .get(getUrl + '/2')
        .expectStatus(200);
    });

    it('GET single user not found', async() => {
        await spec()
        .get(getUrl + '/9999999999999999')
        .expectStatus(404);
    });
});
