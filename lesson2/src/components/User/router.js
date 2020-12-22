const { Router } = require('express');
const UserComponent = require('.');
const validation = require('./validation');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', UserComponent.findAll);

/**
 * Route serving single user creation.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/', validation.fullInBody, UserComponent.create);

/**
 * Route serving specific user updating by its email
 * @name /v1/users/:email
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.put('/:email', validation.emailInParam, UserComponent.update);

/**
 * Route to delete user by its email
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.delete('/', UserComponent.deleteUser);

/**
 * Route to find user by its email
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware
 */
router.get('/:email', validation.emailInParam, UserComponent.find);

/**
 * If error contains errmsg property it should be from mongoose
 * @name mongooseErrors
 * @function
 * @inner
 * @param {callback} functionErrReqResNext - if err => check existing of errmsg prop
 */
router.use((err, req, res, next) => {
    if (err.errmsg) {
        res.status(400).json({ error: err.errmsg });
    }
    next(err);
});

module.exports = router;
