function create_package_service({package_database}) {
    return {
        get_all,
        get_package_by_id
    }

    async function get_all() {
        return package_database.get_all();
    }

    async function get_package_by_id({_id}) {
        return package_database.get_package_by_id({_id});

    }
}

module.exports = {create_package_service};
