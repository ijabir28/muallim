async function create_user_database({client}) {

    const muallim = client.db('pressex');
    const users = muallim.collection('users');

    return {
        find_one,
        add
    };

    async function find_one({username}) {
        return users.findOne({username});
    }

    async function add(user) {
        return users.insertOne(user);
    }
}

module.exports = {create_user_database};
