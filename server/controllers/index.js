const {create_agency_controller} = require('./agency');

/**
 * @constructor
 * @param user_service
 * @param agency_service
 * @returns {{user_controller: {is_logged_in: is_logged_in, login: (function(req, Request.res): Promise<user>)}, admin_controller: {is_admin: ((function(req, Request.res, next): Promise<void>)|error), register_user: ((function(req, Request.res): Promise<void>)|error)}, agency_controller: {get_all: (function(req, res): Promise<T>), contact: ((function(req, res): Promise<void>)|*)}}}
 */
function create_controllers({user_service, agency_service}) {
    const agency_controller = create_agency_controller({agency_service});

    return {user_controller, admin_controller, agency_controller};
}

module.exports = {create_controllers};
