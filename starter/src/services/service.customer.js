// require models
const Customer = require('../models/Customer')

// require service constructor
const CRUDServiceConstructor = require('./service.constructor/service.CRUD')

// require helpers
const {
    filterFindCustomersByName,
} = require('../helpers/helper.filters')

// create CRUDService for Customer
const CRUDCustomerService = new CRUDServiceConstructor(Customer)

// define custom methods for Customer CRUDService below
// search by name
CRUDCustomerService.findByName = async (name) => {
    return name ? await CRUDCustomerService.model.find(filterFindCustomersByName(name)) : []
}
// post many customers
CRUDCustomerService.createMany = async (customers) => {
    return customers ? await CRUDCustomerService.model.insertMany(customers) : null
}
// delete many customers
CRUDCustomerService.deleteManyCustomerById = async (ids) => {
    return ids ? await CRUDCustomerService.model.delete({
        _id: { $in: ids }
    }) : null
}

const CustomerService = {
    CRUD: CRUDCustomerService,
}

module.exports = CustomerService