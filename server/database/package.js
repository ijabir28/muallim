const ObjectId  = require('mongodb').ObjectID;

/**
 * @constructor
 * @param client
 * @returns {Promise<{get_all: (function(): Promise<*>), get_package_by_id: (function({_id: string}): Promise<Array|*>)}>}
 */
async function create_package_database({client}) {

    const muallim = client.db('muallim');
    const packages = muallim.collection('package');

    return {
        get_all,
        get_package_by_id
    };

    /**
     * @method
     * @returns {Promise<package[]>}
     */
    async function get_all() {
        return packages.find().toArray();
    }

    /**
     * @method
     * @param {string}_id
     * @returns {Promise<package>}
     */
    async function get_package_by_id({_id}) {
        console.log({_id})
        return packages.find({_id: new ObjectId(_id)}).toArray();
    }
}

module.exports = {create_package_database};
