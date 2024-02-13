// require services
const ProjectServices = require('../services/service.project')
const CustomerServices = require('../services/service.customer')
const UserServices = require('../services/service.user')

// query helper
const {
    queryOptionalValidator,
} = require('../helpers/helper.query')

const ProjectControllers = {
// for get methods
    getManyProjects: async (req, res) => {
        try {
            if (queryOptionalValidator.isHaveQueryData(req.query)) {
                const projects = await ProjectServices.CRUD.findProjects(req.query)

                return res.status(200).json(projects)
            } else {
                const projects = await ProjectServices.CRUD.findAll()
                return res.status(200).json(projects)
            }
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
// for post methods
    // create a project
    postProject: async (req, res) => {
        try {
            if (req.body.useCase === 'CREATE_EMPTY_PROJECT') {
                const { name, date, customerId, leaderId } = req.body
                const theCustomer = await CustomerServices.CRUD.findById(customerId)
                const theLeader = await UserServices.CRUD.findById(leaderId)

                const newProject = await ProjectServices.CRUD.create({
                    name,
                    date,
                    customerInfo: theCustomer,
                    leaderInfo: theLeader,
                })

                return res.status(200).json(newProject)
            }
            if (req.body.useCase === 'ADD_USERS') {
                const { projectId, userIds } = req.body
                const updatedProject = await ProjectServices.Adding.addUsers(projectId, userIds)

                return res.status(200).json(updatedProject)
            }
            if (req.body.useCase === 'ADD_TASKS') {

            }
            if (req.body.useCase === 'DROP_USERS') {
                const { projectId, userIds } = req.body
                const updatedProject = await ProjectServices.Dropping.dropUsers(projectId, userIds)

                return res.status(200).json(updatedProject)
            }
            if (req.body.useCase === 'DROP_TASKS') {

            }
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
// for put methods
    // update a project by id
    putUpdateProjectById: async (req, res) => {
        try {
            const { id } = req.params
            const { ...bodyData } = req.body
            // filter out empty data
            const filteredData = Object.entries(bodyData)
                .filter(([key, value]) => Boolean(value))
                .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})

            const updateData = {
                // Update permitted fields
                name: filteredData.name ? filteredData.name : undefined,
                date: {
                    start: filteredData.startDate ? filteredData.startDate : undefined,
                    end: filteredData.endDate ? filteredData.endDate : undefined,
                },
                customerInfo: filteredData.customerId ? await CustomerServices.CRUD.findById(filteredData.customerId) : undefined,
                leaderInfo: filteredData.leaderId ? await UserServices.CRUD.findById(filteredData.leaderId) : undefined,
            }

            const result = await ProjectServices.CRUD.updateById(id, updateData)

            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
// for delete methods
    // delete a project by id
    deleteProjectById: async (req, res) => {
        try {
            const { id } = req.params
            const result = await ProjectServices.CRUD.deleteOneById(id)

            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
}

module.exports = ProjectControllers