// require service
const CustomerService = require('../services/service.customer')
const ImageServices = require('../services/service.role/service.file.image')

// require helpers
// file helper
const {
    FileOptionalValidator,
    FileMandatoryValidator,
    getAllFiles,
} = require('../helpers/helper.files')

// query helper
const {
    queryOptionalValidator,
} = require('../helpers/helper.query')

const CustomerControllers = {
// for get methods
    // get all customers
    getManyCustomers: async (req, res) => {
        try {
            if (queryOptionalValidator.isHaveQueryData(req.query)) {
                const customers = await CustomerService.CRUD.findCustomers(req.query)

                return res.status(200).json(customers)
            } else {
                const customers = await CustomerService.CRUD.findAll()
                return res.status(200).json(customers)
            }
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
    // get a customer by id
    getCustomerById: async (req, res) => {
        try {
            const { id } = req.params
            const customer = await CustomerService.CRUD.findById(id)
            return res.status(200).json(customer)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },

// for post methods
    // create a customer
    // both with and without image
    postCreateCustomer: async (req, res) => {
        try {
            const { name, address, phone, email, description } = req.body

            const files = req.files
            // validate no file uploaded
            if (!FileOptionalValidator.isNoFileUploaded(files)) {
                const image = getAllFiles(files)[0]
                // Validate The file is exactly an image
                await FileMandatoryValidator.validateByType(image, 'image')

                // For successful validation
                // Upload the image
                const uploadedResult = await ImageServices.uploadImage(image)
                const newCustomer = await CustomerService.CRUD.create(
                    {
                        name,
                        address,
                        phone,
                        email,
                        image: uploadedResult.path,
                        description
                    }
                )
                return res.status(200).json(newCustomer)
            } else {
                const newCustomer = await CustomerService.CRUD.create(
                    { name, address, phone, email, description }
                )
                return res.status(200).json(newCustomer)
            }
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
    // This is just for demo purposes
    // So that, we will not post image to database
    postManyCustomers: async (req, res) => {
        try {
            // don't miss the curly braces here { customers }
            const { customers } = req.body
            const newCustomers = await CustomerService.CRUD.createMany(customers)

            return res.status(200).json(newCustomers)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },

// for put methods
    // update a customer by id
    // without image
    putUpdateCustomer: async (req, res) => {
        try {
            const { id } = req.params
            const { name, address, phone, email, description } = req.body

            const result = await CustomerService.CRUD.updateById(id, { name, address, phone, email, description })
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
    // restore a customer by id
    putRestoreACustomer: async (req, res) => {
        try {
            const { id } = req.params
            await CustomerService.Restoring.restoreOneById(id)

            return res.status(200).json('Restore successfully')
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
    // restore many customers by ids
    putRestoreManyCustomers: async (req, res) => {
        try {
            const { ids } = req.body
            await CustomerService.Restoring.restoreManyCustomersById(ids)

            return res.status(200).json('Restore successfully')
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },

// for delete methods
    // delete a customer by id
    deleteCustomerById: async (req, res) => {
        try {
            const { id } = req.params
            await CustomerService.CRUD.deleteOneById(id)
            return res.status(200).json('Delete successfully')
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
    // delete many customers
    deleteManyCustomers: async (req, res) => {
        try {
            const { ids } = req.body
            await CustomerService.CRUD.deleteManyCustomerById(ids)
            return res.status(200).json('Delete successfully')
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
}

module.exports = CustomerControllers