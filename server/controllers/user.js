/**
 * @constructor
 * @param user_service
 * @returns {{is_logged_in: is_logged_in, login: (function(req, res): Promise<user>)}}
 */
function create_user_controller({user_service}) {
    return {
        login,
        is_logged_in
    };

    /**
     * @method
     * @param req
     * @param res
     * @returns {Promise<T>}
     */
    async function login(req, res) {
        return user_service.authenticate(req.body)
            .then((user) => {
                // console.log(user);
                res.send(user);
            }).catch((e) => {
                console.error(e);
                res.status(401).json({message: e.message});
            })
    }

    /**
     * @method
     * @param req
     * @param res
     * @param next
     */
    function is_logged_in(req, res, next) {
        try {
            const token = req.get('Authorization');
            const {username} = user_service.is_logged_in({token: token.slice(7)});
            res.locals.username = username
            next();
        } catch (e) {
            console.error(e);
            res.status(401).json({message: e.message});
        }
    }
}

module.exports = {create_user_controller};
