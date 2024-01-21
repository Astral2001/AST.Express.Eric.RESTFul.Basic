// require helpers
const {
    getStoredFolder: getUploadFolder,
    getFinalUploader
} = require('../../helpers/helper.files');

// Direct path to upload image folder
const uploadImageFolder = getUploadFolder('image')

const ImageServices = {
    // For single file upload
    uploadImage: async (imageObject) => {
        try {
            const finalUploader = getFinalUploader(imageObject, uploadImageFolder)
            const uploadPath = finalUploader.path

            await imageObject.mv(uploadPath)

            return {
                status: 200,
                message: 'File uploaded!',
                error: null,
                path: finalUploader.name
            }
        } catch (error) {
            return {
                status: 500,
                message: 'File upload failed!',
                error: JSON.stringify(error),
                path: null
            }
        }
    },

    // For multiple files upload
    uploadImages: async (imagesObject) => {
        try {
            const finalNames = []

            imagesObject.map(async (image) => {
                const finalUploader = getFinalUploader(image, uploadImageFolder)
                const uploadPath = finalUploader.path
                const finalName = finalUploader.name

                finalNames.push(finalName)

                await image.mv(uploadPath)
            })

            return {
                status: 200,
                message: 'Files uploaded!',
                error: null,
                path: finalNames
            }
        } catch (error) {
            return {
                status: 500,
                message: 'Files upload failed!',
                error: JSON.stringify(error),
                path: null
            }
        }
    },
}

module.exports = ImageServices