/**
 * @constructor
 * @param agency_service
 * @returns {{get_all: (function(*, *): Promise<T>), contact: ((function(*, *): Promise<void>)|*)}}
 */
function create_agency_controller({agency_service}) {
    return {
        get_all,
        contact
    };

    /**
     * @method
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async function book(req, res) {
        console.log(res.locals.username);
        console.log(await agency_service.get_agency_by_id({_id: req.contact._id}));
        res.send({message: "Under Development"});
    }

    /**
     * @method
     * @param req
     * @param res
     * @returns {Promise<agencys>}
     */
    async function get_all(req, res) {
        return agency_service.get_all()
            .then((agencys) => {
                // console.log(user);
                res.send(agencys);
            }).catch((e) => {
                console.error(e);
                res.status(401).json({message: e.message});
            })
    }
}

module.exports = {create_agency_controller}
