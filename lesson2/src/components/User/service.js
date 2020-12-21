const { update } = require('./model');
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
     * @param { id, user.data }
     * @summary find user by {id} and update all its data
     * @returns Promise<UserModel[]>
     */
  async update(id, data) {
    return UserModel.findOneAndUpdate({ _id: id }, data, { new: true });
  },
};
