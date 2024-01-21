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
    // name: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     max: 32,
    // },
    // address: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },
    // phone: {
    //     type: Number,
    //     required: true,
    // },
    // email: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     unique: true,
    // },
    // image: {
    //     type: String,
    //     trim: true,
    // },
    // description: {
    //     type: String,
    //     trim: true,
    // },
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

            return
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
}

module.exports = CustomerControllers