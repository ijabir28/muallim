/**
 * @constructor
 * @param agency_database
 * @returns {{get_all: (function(): Promise<*>), get_agency_by_id: (function({_id: string}): Promise<Array|*>)}}
 */
function create_agency_service({agency_database}) {
    return {
        get_all,
        get_agency_by_id
    }

    /**
     * @method
     * @returns {Promise<agency[]>}
     */
    async function get_all() {
        return agency_database.get_all();
    }

    /**
     * @method
     * @param {string} _id
     * @returns {Promise<agency>}
     */
    async function get_agency_by_id({_id}) {
        return agency_database.get_agency_by_id({_id});

    }
}

module.exports = {create_agency_service};
