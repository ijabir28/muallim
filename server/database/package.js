const ObjectId  = require('mongodb').ObjectID;

async function create_package_database({client}) {

    const muallim = client.db('muallim');
    const package = muallim.collection('package');

    return {
        get_all,
        get_package_by_id
    };

    async function get_all() {
        return package.find().toArray();
    }

    async function get_package_by_id({_id}) {
        console.log({_id})
        return package.find({_id: new ObjectId(_id)}).toArray();
    }
}

module.exports = {create_package_database};
