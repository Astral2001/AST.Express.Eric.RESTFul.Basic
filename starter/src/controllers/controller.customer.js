// require service
const CustomerService = require('../services/service.customer')
const ImageServices = require('../services/service.role/service.file.image')

// require helpers
const {
    FileOptionalValidator,
    FileMandatoryValidator,
    getAllFiles,
} = require('../helpers/helper.files')

const CustomerControllers = {
// for get methods
    getAllCustomers: async (req, res) => {
        try {
            const customers = await CustomerService.CRUD.findAll()
            return res.status(200).json(customers)
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
    }
}

module.exports = CustomerControllers