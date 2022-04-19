/**
 * @constructor
 * @param package_database
 * @returns {{get_all: (function(): Promise<*>), get_package_by_id: (function({_id: string}): Promise<Array|*>)}}
 */
function create_package_service({package_database}) {
    return {
        get_all,
        get_package_by_id
    }

    /**
     * @method
     * @returns {Promise<package[]>}
     */
    async function get_all() {
        return package_database.get_all();
    }

    /**
     * @method
     * @param {string} _id
     * @returns {Promise<package>}
     */
    async function get_package_by_id({_id}) {
        return package_database.get_package_by_id({_id});

    }
}

module.exports = {create_package_service};
