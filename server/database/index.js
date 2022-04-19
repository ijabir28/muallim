const {create_user_database} = require("./user");
const {create_package_database} = require("./package");

/**
 * @constructor
 * @returns {Promise<{user_database: {add: function(*): Promise<*>, find_one: function({username: *}): Promise<*>}, package_database: {get_all: function(): Promise<*>, get_package_by_id: function({_id: *}): Promise<*>}}>}
 */
async function create_database() {
    const MongoClient = require('mongodb').MongoClient;
    const client = new MongoClient(process.env.MONGO_URL);

    await client.connect();

    const user_database = await create_user_database({client});
    const package_database = await create_package_database({client});

    return {user_database, package_database};
}

module.exports = {create_database};
