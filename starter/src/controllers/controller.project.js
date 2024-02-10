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
            switch (req.body.useCase) {
                case 'CREATE_EMPTY_PROJECT':
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
                case 'ADD_USERS':
                    const { projectId, userIds } = req.body
                    const updatedProject = await ProjectServices.Adding.addUsers(projectId, userIds)

                    return res.status(200).json(updatedProject)
                case 'ADD_TASKS':
            }
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
}

module.exports = ProjectControllers