const {create_user_database} = require("./user");
const {create_agency_database} = require("./agency");

/**
 * @constructor
 * @returns {Promise<{user_database: {add: function(*): Promise<*>, find_one: function({username: *}): Promise<*>}, agency_database: {get_all: function(): Promise<*>, get_agency_by_id: function({_id: *}): Promise<*>}}>}
 */
async function create_database() {
    const MongoClient = require('mongodb').MongoClient;
    const client = new MongoClient(process.env.MONGO_URL);

    await client.connect();

    const user_database = await create_user_database({client});
    const agency_database = await create_agency_database({client});

    return {user_database, agency_database};
}

module.exports = {create_database};
