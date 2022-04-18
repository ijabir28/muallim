const express = require('express');

function create_admin_router({controllers}) {
    const router = express.Router();
    router.post('/register_user',
        controllers.admin_controller.is_admin,
        controllers.admin_controller.register_user
    );
    return router;
}

module.exports = create_admin_router;
