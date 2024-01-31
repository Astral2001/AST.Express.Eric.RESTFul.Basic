// require models
const User = require('../models/User');

// require helpers
const {
    filterFindUsersByName,
} = require('../helpers/helper.filters');

const UserServices = {
    CRUD: { // User Model CRUD Services
        // Find all users
        findAll: async () => {
            return await User.find({});
        },
        // Find user by id
        findById: async (id) => {
            return await User.findById(id);
        },
        // Find user by name
        findByName: async (name) => {
            return name ? await User.find(
                filterFindUsersByName(name)
            ) : [];
        },
        // Create new user
        create: async (createData) => {
            return await User.create(createData);
        },
        // Update user by id
        updateById: async (id, updateData) => {
            return await User.updateOne(
                { _id: id },
                updateData,
                // This option is for validating when update
                { runValidators: true }
            );
        },
        // Delete user by id
        // Using Soft Delete
        deleteOneById: async (id) => {
            await User.deleteOne({ _id: id });
        }
    },
}

module.exports = UserServices
