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
CRUDCustomerService.findByName = async (name) => {
    return name ? await Customer.find(filterFindCustomersByName(name)) : []
}

const CustomerService = {
    CRUD: CRUDCustomerService,
}

module.exports = CustomerService