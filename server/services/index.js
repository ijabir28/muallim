const {create_user_service} = require('./user');
const {create_package_service} = require('./package');

/**
 * @constructor
 * @param user_database
 * @param package_database
 * @return {{user_service: {add: ((function({first_name: *, last_name: *, username: *, password: *}): Promise<void>)|*), authenticate: ((function(*): Promise<*|undefined>)|*), is_logged_in: (function({token: *}): *), is_logged_in_as_admin: ((function({token: *}): Promise<void>)|*)}, package_service: {get_all: (function(): Promise<*>), get_package_by_id: (function({_id: string}): Promise<Array|*>)}}}
 */
function create_services({user_database, package_database}) {

    const user_service = create_user_service({user_database});
    const package_service = create_package_service({package_database});

    return {user_service, package_service};
}

module.exports = {create_services};
