const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    fullName: {
        type: String,
        trim: true,
        required: true,
    },
    age: Number,
}, {
    collection: 'usermodel',
    versionKey: false,
});

module.exports = connections.model('UserModel', UserSchema);
