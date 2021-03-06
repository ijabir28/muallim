/**
 * @constructor
 * @param package_service
 * @returns {{get_all: (function(*, *): Promise<T>), book: ((function(*, *): Promise<void>)|*)}}
 */
function create_package_controller({package_service}) {
    return {
        get_all,
        book
    };

    /**
     * @method
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async function book(req, res) {
        console.log(res.locals.username);
        console.log(await package_service.get_package_by_id({_id: req.body._id}));
        res.send({message: "Under Development"});
    }

    /**
     * @method
     * @param req
     * @param res
     * @returns {Promise<packages>}
     */
    async function get_all(req, res) {
        return package_service.get_all()
            .then((packages) => {
                // console.log(user);
                res.send(packages);
            }).catch((e) => {
                console.error(e);
                res.status(401).json({message: e.message});
            })
    }
}

module.exports = {create_package_controller}
