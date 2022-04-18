function create_admin_controller({user_service}) {
    return {
        is_admin,
        register_user,
    };

    async function is_admin(req, res, next) {
        try {
            const token = req.get('Authorization');
            await user_service.is_logged_in_as_admin({token: token.slice(7)});

            next();
        } catch (e) {
            console.error(e.message);
            res.status(401).json({message: e.message});
        }
    }

    async function register_user(req, res) {
        try {
            // const { first_name, last_name, username, password } = req.body;
            // console.log({first_name, last_name, username, password});

            await user_service.add(req.body)
            res.send({message: 'User Created Successfully!'});
        } catch (e) {
            if(e.message === 'Username already exist!') {
                res.status(403).json({message: e.message});
            }else {
                res.status(401).json({message: e.message});
            }
        }
    }
}

module.exports = {create_admin_controller}
