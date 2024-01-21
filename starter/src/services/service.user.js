// require models
const User = require('../models/User');

// require service constructors
const CRUDServiceConstructor = require('./service.constructor/service.CRUD');

// require helpers
const {
    filterFindUsersByName,
} = require('../helpers/helper.filters');

// create CRUDService for User
const CRUDUserService = new CRUDServiceConstructor(User);

// define custom methods for User CRUDService below
CRUDUserService.findByName = async (name) => {
    return name ? await User.find(filterFindUsersByName(name)) : [];
}

const UserServices = {
    CRUD: CRUDUserService,
}

module.exports = UserServices
