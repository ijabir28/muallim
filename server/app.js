const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const {create_database} = require("./database");
const {create_services} = require('./services');
const {create_controllers} = require("./controllers");
const {create_api} = require("./api");

async function create_app() {
    const app = express();

    app.use(cors({
        origin: 'http://localhost:3000'
    }));
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static('resources'));

    const database = await create_database();
    const services = create_services(database);
    const controllers = create_controllers(services);
    const api = create_api({controllers});

    app.use('/api', api);

    return app;
}

module.exports = {create_app};
