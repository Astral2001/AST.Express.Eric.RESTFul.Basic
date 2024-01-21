const path = require('path')
// require service
const DemoServices = require('../services/service.demo')

const DemoControllers = {
    // Demo file upload
    postUploadImage: async (req, res) => {
        const image = req.files.image
        const uploadPath = path.join(__dirname, '../public/img')

        // Image files validation
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.')
        } else if (!req.files.image) {
            return res.status(400).send('No image uploaded.')
        } else if (!image.mimetype.includes('image')) {
            return res.status(400).send('File is not an image.')
        }

        const result = await DemoServices.uploadImage(image, uploadPath)

        return res.status(result.status).json(result)
    },

    postUploadImages: async (req, res) => {
        const uploadPath = path.join(__dirname, '../public/img/')

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.')
        } else if (Object.keys(req.files).length === 1) {
            // For 1 input field with multiple files
            const images = req.files.images
            const result = await DemoServices.uploadImages(images, uploadPath)

            return res.status(result.status).json(result)
        } else {
            // For multiple input fields with multiple files
            // One file per field
            const files = req.files

            // Check all files are images
            for (let file of Object.values(files)) {
                if (!file.mimetype.includes('image')) {
                    return res.status(400).send('Existing file is not an image.')
                }
            }

            // if all files are images
            // get all files to an array
            const images = Object.values(files)
            const result = await DemoServices.uploadImages(images, uploadPath)

            return res.status(result.status).json(result)
        }
    }
}

module.exports = DemoControllers