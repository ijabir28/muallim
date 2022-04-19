const express = require('express');

/**
 * @constructor
 * @param controllers
 * @returns {Router}
 */
function create_packages_router({controllers}) {
    const router = express.Router();

    router.get('/get', controllers.package_controller.get_all);
    router.post('/book', controllers.user_controller.is_logged_in, controllers.package_controller.book);

    return router;
}

module.exports = create_packages_router;
