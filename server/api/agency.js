const express = require('express');

/**
 * @constructor
 * @param controllers
 * @returns {Router}
 */
function create_packages_router({controllers}) {
    const router = express.Router();

    router.get('/get', controllers.agency_controller.get_all);
    router.post('/contact', controllers.user_controller.is_logged_in, controllers.agency_controller.contact);

    return router;
}

module.exports = create_agency_router;
