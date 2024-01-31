module.exports = {
    queryOptionalValidator: {
        // Validate req.query data
        // For pagination
        isValidPaginationData: (query) => {
            return (
                query.hasOwnProperty('page')
                && query.hasOwnProperty('limit')
                && query.page !== ''
                && query.limit !== ''
            )
        },
    },
    // For calculating the offset value for pagination
    getOffset: (page, limit) => {
        return (page - 1) * limit
    },

}