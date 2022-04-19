const request = require('supertest');

const {create_app} = require("../../app");


describe('Package endpoint', (done) => {
    let app;

    beforeAll(async () => {
        app = await create_app();
    });
})
