const UserService = require('./service');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function create(req, res, next) {
    try {
        const record = await UserService.create(req.body);
        record.message = 'The user was created successfully!';

        res.status(201).json({ message: 'The user was created successfully!', record });
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function update(req, res, next) {
    try {
        const { email } = req.params;
        const record = await UserService.update(email, req.body);
        const message = `The user with email '${email}' was successfully updated!`;

        res.status(200).json({ message, record });
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function deleteUser(req, res, next) {
    try {
        const { email } = req.body;
        UserService.delete(email).then(() => {
            res.status(204).end();
        });
    } catch (error) {
        next(error);
    }
}

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function find(req, res, next) {
    try {
        const { email } = req.params;
        UserService.find(email).then((record) => {
            res.status(200).json(record);
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    create,
    update,
    deleteUser,
    find,
};
