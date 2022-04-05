const express = require('express');

async function create_app() {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', (req, res) => {
        res.send('Welcome to Muallim API!')
    })

    return app;
}

module.exports = {create_app};
