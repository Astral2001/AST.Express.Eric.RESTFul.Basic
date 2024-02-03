module.exports = {
    // to get a name of variable
    // input variable must be in object {}
    nameOfVar: (varObject = {}) => {
        if (Object.keys(varObject).length !== 1)
            return null
        return Object.keys(varObject)[0]
    },
}