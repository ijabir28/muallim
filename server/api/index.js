const express = require('express');

const create_user_router = require('./user');
const create_admin_router = require('./admin');
const create_package_router = require('./package');

/**
 * @constructor
 * @param controllers
 * @returns {Router}
 */
function create_api({controllers}) {
    const router = express.Router();

    router.use('/user', create_user_router({controllers}));
    router.use('/admin', create_admin_router({controllers}));
    router.use('/package', create_package_router({controllers}));

    return router;
}


module.exports = {create_api};
