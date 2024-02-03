// This function can't be used for Projection
const getTheList = (inputKeys = {}) => {
    if (typeof inputKeys !== 'object' || inputKeys === null)
        return []

    const customKeys = Object.keys(inputKeys).map(key => {
        if (inputKeys[key] === '')
            return key.replace('Key', '')
        return inputKeys[key]
    })

    return customKeys
}

// aqp options
const aqpOptsAction = {
    // Disable options
    disablePagination: (customKeys = {limitKey: '', skipKey: '', sortKey: ''}) => {
        return {
            blacklist: getTheList(customKeys)
        }
    },
    disableProjection: (projectionKey = '') => {
        return {
            projectionKey: projectionKey,
            blacklist: [projectionKey || 'fields']
        }
    },
    disablePopulation: (populationKey = '') => {
        return {
            populationKey: populationKey,
            blacklist: [populationKey || 'populate']
        }
    },
}

module.exports = aqpOptsAction