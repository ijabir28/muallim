const {create_user_controller} = require('./user');
const {create_admin_controller} = require('./admin');

const {create_package_controller} = require('./package');

/**
 * @constructor
 * @param user_service
 * @param package_service
 * @returns {{user_controller: {is_logged_in: is_logged_in, login: (function(req, Request.res): Promise<user>)}, admin_controller: {is_admin: ((function(req, Request.res, next): Promise<void>)|error), register_user: ((function(req, Request.res): Promise<void>)|error)}, package_controller: {get_all: (function(req, res): Promise<T>), book: ((function(req, res): Promise<void>)|*)}}}
 */
function create_controllers({user_service, package_service}) {
    const user_controller = create_user_controller({user_service});
    const admin_controller = create_admin_controller({user_service});
    const package_controller = create_package_controller({package_service});

    return {user_controller, admin_controller, package_controller};
}

module.exports = {create_controllers};
