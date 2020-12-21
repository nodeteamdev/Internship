const { Router } = require('express');
const UserComponent = require('.');
const joi = require('./validation');

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
router.post('/', (req, res, next) => joi.validate(req.body), UserComponent.create);

/**
 * Route serving specific user updating by its email
 * @name /v1/users/:email
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.put('/:email', UserComponent.update);

/**
 * Route to delete user by its email
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.delete('/', UserComponent.deleteUser);

module.exports = router;
