const {create_user_service} = require('./user');
const {create_package_service} = require('./package');

function create_services({user_database, package_database}) {

    const user_service = create_user_service({user_database});
    const package_service = create_package_service({package_database});

    return {user_service, package_service};
}

module.exports = {create_services};
