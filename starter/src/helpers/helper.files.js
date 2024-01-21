const path = require('path')

module.exports = {
    // a validator for file handling
    // Optional file upload
    FileOptionalValidator: {
        isNoFileUploaded: (files) => {
            return !files || Object.keys(files).length === 0
        },
    },

    // Mandatory file upload
    FileMandatoryValidator: {
        // validate no file uploaded
        validateNoFileUploaded: async (files) => {
            const isNoFile = !files || Object.keys(files).length === 0

            // throw error if no file uploaded
            // auto return for affirmative case
            if (isNoFile)
                throw new Error('No files were uploaded.')
        },

        // validate all files same type
        validateAllSameType: async (files = [], type = '') => {
            const isSame = files.every(file => file.mimetype.includes(type));

            // throw error if not all files are same type
            // auto return for affirmative case
            if (!isSame)
                throw new Error(`Existing file is not a/an ${type}.`)
        },

        // validate file by type
        validateByType: async (file, type = '') => {
            const isSame = file.mimetype.includes(type);

            // throw error if file is not exact type
            // auto return for affirmative case
            if (!isSame)
                throw new Error(`Existing file is not a/an ${type}.`)
        }
    },

    // get upload folder path via type
    // The return path is mapped to public folder
    getStoredFolder: (type) => {
        switch (type) {
            case 'image': // image folder
                return path.join(__dirname, '../public/img/')
            default: // default public folder
                return path.join(__dirname, '../public/')
        }
    },

    // get final uploader object
    // The return object contains the final path and name
    getFinalUploader: (fileObject, folder) => {
        // get file extension
        const extension = path.extname(fileObject.name)
        // get file name without extension
        const baseName = path.basename(fileObject.name, extension)

        // create final name
        // baseName + timestamp + extension
        const finalName = `${baseName}-${Date.now()}${extension}`

        // return final path and export final name
        return {
            path: `${folder}/${finalName}`,
            name: finalName
        }
    },

    // get all files from req.files
    // return array of files
    getAllFiles: (filesObject) => {
        // This way can handle many cases:
        // 1. upload single file
        // 2. upload multiple files with same field name
        // 3. upload multiple files with different field name (one file: one field)
        // 4. upload multiple files with different field name (many files: one field)
        return Object.values(filesObject).flat(Infinity)
    },
}