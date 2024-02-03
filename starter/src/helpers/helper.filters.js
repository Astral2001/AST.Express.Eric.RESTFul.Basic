module.exports = {
    filterFindUsersByName: (name) => {
        // RegExp is used to make the search case insensitive
        return { name: new RegExp(name, 'i') }
    },

    filterFindCustomersByName: (name) => {
        // RegExp is used to make the search case insensitive
        return { name: new RegExp(name, 'i') }
    },
}