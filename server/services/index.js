const {create_user_service} = require('./user');
const {create_agency_service} = require('./agency');

/**
 * @constructor
 * @param user_database
 * @param agency_database
 * @return {{user_service: {add: ((function({first_name: *, last_name: *, username: *, password: *}): Promise<void>)|*), authenticate: ((function(*): Promise<*|undefined>)|*), is_logged_in: (function({token: *}): *), is_logged_in_as_admin: ((function({token: *}): Promise<void>)|*)}, agency_service: {get_all: (function(): Promise<*>), get_agency_by_id: (function({_id: string}): Promise<Array|*>)}}}
 */
function create_services({user_database, agency_database}) {

    const user_service = create_user_service({user_database});
    const agency_service = create_agency_service({agency_database});

    return {user_service, agency_service};
}

module.exports = {create_services};
