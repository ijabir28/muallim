const ObjectId  = require('mongodb').ObjectID;

/**
 * @constructor
 * @param client
 * @returns {Promise<{get_all: (function(): Promise<*>), get_agency_by_id: (function({_id: string}): Promise<Array|*>)}>}
 */
async function create_agency_database({client}) {

    const muallim = client.db('muallim');
    const agencys = muallim.collection('agency');

    return {
        get_all,
        get_agency_by_id
    };

    /**
     * @method
     * @returns {Promise<agency[]>}
     */
    async function get_all() {
        return agencys.find().toArray();
    }

    /**
     * @method
     * @param {string}_id
     * @returns {Promise<agency>}
     */
    async function get_agency_by_id({_id}) {
        console.log({_id})
        return agencys.find({_id: new ObjectId(_id)}).toArray();
    }
}

module.exports = {create_agency_database};
