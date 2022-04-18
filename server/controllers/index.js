const {create_user_controller} = require('./user');
const {create_admin_controller} = require('./admin');

const {create_package_controller} = require('./package');

function create_controllers({user_service, package_service}) {
    const user_controller = create_user_controller({user_service});
    const admin_controller = create_admin_controller({user_service});
    const package_controller = create_package_controller({package_service});

    return {user_controller, admin_controller, package_controller};
}

module.exports = {create_controllers};
