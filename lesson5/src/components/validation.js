const Joi = require('@hapi/joi');
const { Types } = require('mongoose');

/**
 * @exports
 * @class Validation
 */
class Validation {
    /**
     * Creates an instance of Schema.
     * @constructor
     * @memberof JoiSchema
     */
    constructor() {
        /**
         * @static
         * @type {string}
         * @memberof JoiSchema
         */
        this.messageObjectId = 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters';
        this.Joi = Joi.extend({
            type: 'objectId',
            messages: {
                'objectId.base': this.messageObjectId,
            },
            validate(value, helpers) {
                if (!Types.ObjectId.isValid(value)) {
                    return {
                        value,
                        errors: helpers.error('objectId.base'),
                    };
                }
                return {
                    value,
                }; // Keep the value as it was
            },
        });
    }
}

module.exports = Validation;
