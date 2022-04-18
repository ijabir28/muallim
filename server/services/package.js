function create_package_service({package_database}) {
    return {
        get_all
    }

    async function get_all() {
        return package_database.get_all();
    }
}

module.exports = {create_package_service};
