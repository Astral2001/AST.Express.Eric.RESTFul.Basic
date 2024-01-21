const DemoServices = {
    // Deme file upload
    uploadImage: async (imageObject, uploadPath) => {
        try {
            await imageObject.mv(uploadPath + imageObject.name)
            return {
                status: 200,
                message: 'File uploaded!',
                error: null,
                path: `public/img/${imageObject.name}`
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

    uploadImages: async (imagesObject, uploadPath) => {
        try {
            imagesObject.map(async (image) => {
                await image.mv(uploadPath + image.name)
            })

            return {
                status: 200,
                message: 'Files uploaded!',
                error: null,
                path: imagesObject.map((image) => `public/img/${image.name}`)
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

module.exports = DemoServices