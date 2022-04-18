async function create_package_database({client}) {

    const muallim = client.db('muallim');
    const package = muallim.collection('package');

    return {
        get_all
    };

    async function get_all() {
        return package.find().toArray();
    }
}

module.exports = {create_package_database};
