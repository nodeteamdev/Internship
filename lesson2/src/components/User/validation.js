const Joi = require('@hapi/joi');

const schemas = {
    email: Joi.object().keys({
        email: Joi.string().email().required(),
    }),
    fullName: Joi.object().keys({
        fullName: Joi.string().required().regex(/[A-Za-z]+ [A-Za-z]+/),
    }),
    age: Joi.object().keys({
        age: Joi.number().integer().min(12).max(90),
    }),
};

module.exports = {
    async fullInBody(req, res, next) {
        try {
            await schemas.age.validateAsync({ age: req.body.age });
            await schemas.fullName.validateAsync({ fullName: req.body.fullName });
            await schemas.email.validateAsync({ email: req.body.email });
        } catch (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    },
    async emailInParam(req, res, next) {
        try {
            await schemas.email.validateAsync({ email: req.params.email });
        } catch (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    },

};
