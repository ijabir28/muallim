const request = require('supertest');

const {create_app} = require("../../app");


describe('Package endpoint', () => {
    let server;

    beforeAll(async () => {
        server = await request(await create_app());
    });

    it('should return package list', async () => {
        const res = await server.get('/api/package/get');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(7);
    });
})
