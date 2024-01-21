// require service
const DemoServices = require('../services/service.role/service.file.image')
// require helpers
const {
    FileValidator,
    getAllFiles
} = require('../helpers/helper.files')

const DemoControllers = {
    // Demo file upload
    postUploadImage: async (req, res) => {
        try {
            const files = req.files
            // validate no file uploaded
            await FileValidator.validateNoFileUploaded(files)

            const image = getAllFiles(files)[0]
            // Validate The file is exactly an image
            await FileValidator.validateByType(image, 'image')

            // For successful validation
            // Upload the image
            const result = await DemoServices.uploadImage(image)

            // Return successful response
            return res.status(result.status).json(result)
        } catch (error) {
            return res.status(400).send(error.message)
        }
    },

    postUploadImages: async (req, res) => {
        try {
            const files = req.files
            // Get all images from user request
            const images = getAllFiles(files)

            // Validate no file uploaded
            // Validate all files are images
            await FileValidator.validateNoFileUploaded(files)
            await FileValidator.validateAllSameType(images, 'image')

            // For successful validation
            // Upload all images
            const result = await DemoServices.uploadImages(images)

            // Return successful response
            return res.status(result.status).json(result)
        } catch (error) {
            return res.status(400).send(error.message)
        }
    }
}

module.exports = DemoControllers