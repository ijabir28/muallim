const jwt = require("jsonwebtoken");

/**
 * @constructor
 * @param user_database
 * @return {{add: ((function({first_name: *, last_name: *, username: *, password: *}): Promise<void>)|*), authenticate: ((function(*): Promise<*|undefined>)|*), is_logged_in: (function({token: *}): *), is_logged_in_as_admin: ((function({token: *}): Promise<void>)|*)}}
 */
function create_user_service({user_database}) {
    return {
        authenticate,
        is_logged_in,
        is_logged_in_as_admin,
        add
    };

    /**
     * @method
     * @param user
     * @param given_password
     * @return {boolean}
     */
    function is_valid_user({user, given_password}) {
        return user && user.password === given_password;
    }

    /**
     * @method
     * @param given_user
     * @return {Promise<*>}
     */
    async function authenticate(given_user) {
        const user = await user_database.find_one({username: given_user.username});

        if (is_valid_user({user, given_password: given_user.password})) {
            const token = jwt.sign(
                {username: user.username},
                process.env.JWT_SECRET,
                {expiresIn: process.env.JWT_EXPIRESIN}
            );
            delete user.password;
            delete user._id;
            user.token = token;

            return user;
        } else {
            throw new Error('Invalid Username or Password');
        }
    }

    /**
     * @method
     * @param token
     * @return {*}
     */
    function is_logged_in({token}) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

    /**
     * @method
     * @param token
     * @return {Promise<void>}
     */
    async function is_logged_in_as_admin({token}) {
        const {username} = jwt.verify(token, process.env.JWT_SECRET);
        // console.log({username});

        const user = await user_database.find_one({username});

        if (user.type !== 'admin') {
            throw new Error('Unauthorized!');
        }
    }

    /**
     * @method
     * @param first_name
     * @param last_name
     * @param username
     * @param password
     * @return {Promise<void>}
     */
    async function add({first_name, last_name, username, password}) {
        const user = await user_database.find_one({username});
        // console.log({user});

        if (user) {
            throw new Error('Username already exist!');
        }
        // console.log({first_name, last_name, username, password});

        await user_database.add({first_name, last_name, username, password, type: 'analyst'});
    }
}

module.exports = {create_user_service};
