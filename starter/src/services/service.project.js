// Require models
const Project = require('../models/Project')

const ProjectServices = {
    // Project Model CRUD Services
    CRUD: {
        // Create new project
        create: async (createData) => {
            return await Project.create(createData)
        },
    },
    Adding: {
        // Add a user to project
        addUsers: async (projectId, userIds) => {
            const project = await Project.findById(projectId).exec()

            userIds.forEach(userId => {
                if (!project.usersInfo.includes(userId))
                    project.usersInfo.push(userId)
            })

            return await project.save()
        },
        // Add a task to project
    }
}

module.exports = ProjectServices