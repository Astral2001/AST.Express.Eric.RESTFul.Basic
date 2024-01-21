// require models
const Customer = require('../models/Customer')

// require service constructor
const CRUDServiceConstructor = require('./service.constructor/service.CRUD')

// create CRUDService for Customer
const CRUDCustomerService = new CRUDServiceConstructor(Customer)

// define custom methods for Customer CRUDService below
CRUDCustomerService

const CustomerService = {
    CRUD: CRUDCustomerService,
}

module.exports = CustomerService