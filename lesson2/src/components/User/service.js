const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return UserModel.find({});
    },

    /**
     * @exports
     * @method create
     * @param { user.data }
     * @summary create new user
     * @returns Promise<UserModel[]>
     */
    async create(data) {
        return new UserModel(data).save();
    },

    /**
     * @exports
     * @method update
     * @param { user._id, user.data }
     * @summary find user by {_id} and update its data
     * @returns Promise<UserModel[]>
     */
    async update(email, data) {
        return UserModel.findOneAndUpdate({ email }, data, { new: true });
    },

    /**
     * @exports
     * @method delete
     * @param { user.email }
     * @summary find user by {email} and delete it
     * @returns Promise<UserModel[]>
     */
    async delete(email) {
        return UserModel.deleteOne({ email });
    },
};
