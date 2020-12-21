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

  async create(data) {
    return new UserModel(data).save();
  },
};
