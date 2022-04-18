const jwt = require("jsonwebtoken");

function create_user_service({user_database}) {
    return {
        authenticate,
        is_logged_in,
        is_logged_in_as_admin,
        add
    };

    function is_valid_user({user, given_password}) {
        return user && user.password === given_password;
    }

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

    function is_logged_in({token}) {
        return jwt.verify(token, process.env.JWT_SECRET);
    }

    async function is_logged_in_as_admin({token}) {
        const {username} = jwt.verify(token, process.env.JWT_SECRET);
        // console.log({username});

        const user = await user_database.find_one({username});

        if (user.type !== 'admin') {
            throw new Error('Unauthorized!');
        }
    }

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
