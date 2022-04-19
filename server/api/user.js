const express = require('express');

/**
 * @constructor
 * @param controllers
 * @returns {Router}
 */
function create_user_router({controllers}) {
    const router = express.Router();
    router.post('/login',
        controllers.user_controller.login
    );
    return router;
}

module.exports = create_user_router;
