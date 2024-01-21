// require models
const User = require('../models/User');

// require helpers
const {
    filterFindUsersAll,
    filterFindUsersByName,
} = require('../helpers/helper.filters');

const UserServices = {
    findAll: async () => {
        return await User.find(filterFindUsersAll());
    },

    findByName: async (name) => {
        return name ? await User.find(filterFindUsersByName(name)) : [];
    },

    findById: async (id) => {
        return await User.findById(id);
    },

    create: async (createData) => {
        return await User.create(createData);
    },

    updateById: async (id, updateData) => {
        return await User.updateOne({ _id: id }, updateData);
    },

    deleteById: async (id) => {
        await User.deleteOne({ _id: id });
    },
}

module.exports = UserServices
