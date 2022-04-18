const express = require('express');

function create_packages_router({controllers}) {
    const router = express.Router();

    router.get('/get', controllers.package_controller.get_all);

    return router;
}

module.exports = create_packages_router;
