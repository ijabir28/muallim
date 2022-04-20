const express = require('express');

const create_admin_router = require('./admin');
const create_agency_router = require('./agency');

/**
 * @constructor
 * @param controllers
 * @returns {Router}
 */
function create_api({controllers}) {
    const router = express.Router();


    router.use('/package', create_agency_router({controllers}));

    return router;
}


module.exports = {create_api};
