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

async function create(req, res, next) {
  try {
    const record = await UserService.create(req.body);
    record.message = 'The user was created successfully!';
    console.log(record);

    res.status(201).json({ message: 'The user was created successfully!', record });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  findAll,
  create,
};
