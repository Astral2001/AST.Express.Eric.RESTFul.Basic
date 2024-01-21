const path = require('path')

const getUploadFolder = (type) => {
    switch (type) {
        case 'image':
            return path.join(__dirname, '../public/img/')
        default:
            return path.join(__dirname, '../public/')
    }
}

const getFinalUploader = (fileObject, folder) => {
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
}

module.exports = {
    getUploadFolder,
    getFinalUploader
}