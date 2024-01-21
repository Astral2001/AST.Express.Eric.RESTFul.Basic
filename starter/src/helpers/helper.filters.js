const filterFindUsersAll = () => { {} }
const filterFindUsersByName = (name) => {
    // RegExp is used to make the search case insensitive
    return { name: new RegExp(name, 'i') }
}

module.exports = {
    filterFindUsersAll,
    filterFindUsersByName,
}