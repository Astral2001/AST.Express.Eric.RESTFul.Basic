// require models
const Customer = require('../models/Customer')

// require helpers
const {
    filterFindCustomersByName,
} = require('../helpers/helper.filters')

const CustomerService = {
    // Customer Model CRUD Services
    CRUD: {
        // Find all customers
        findAll: async () => {
            return await Customer.find({})
        },
        // Find customers by pagination
        findCustomersWithPagination: async (limit, offset, sortCondition) => {
            return await Customer.find({})
                .limit(limit)
                .skip(offset)
                .sort(sortCondition)
                .exec()
        },
        // Find customer by id
        findById: async (id) => {
            return await Customer.findById(id)
        },
        // Find customer by name
        findByName: async (name) => {
            return name ? await Customer.find(
                filterFindCustomersByName(name)
            ) : []
        },
        // Create new customer
        create: async (createData) => {
            return await Customer.create(createData)
        },
        // Create many customers
        createMany: async (customers) => {
            return customers ? await Customer.insertMany(customers) : null
        },
        // Update customer by id
        updateById: async (id, updateData) => {
            return await Customer.updateOne(
                { _id: id },
                updateData,
                // This option is for validating when update
                { runValidators: true }
            )
        },
        // Delete customer by id
        // Using Soft Delete
        deleteOneById: async (id) => {
            await Customer.deleteById({ _id: id })
        },
        // Delete many customers
        deleteManyCustomerById: async (ids) => {
            return ids ? await Customer.delete({
                _id: { $in: ids }
            }) : null
        },
    },
    // Customer Model Restoring Services
    Restoring: {
        // Restore customer by id
        restoreOneById: async (id) => {
            await Customer.restore({ _id: id })
        },
        // Restore many customers
        restoreManyCustomersById: async (ids) => {
            return ids ? await Customer.restore({
                _id: { $in: ids }
            }) : null
        },
    },
}

module.exports = CustomerService