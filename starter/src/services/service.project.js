//
const aqp = require('api-query-params')

// Require models
const Project = require('../models/Project')

// Require helpers
const { getOffset } = require('../helpers/helper.query')

const ProjectServices = {
    // Project Model CRUD Services
    CRUD: {
        // Find all projects
        findAll: async () => {
            return await Project.find({})
        },
        // Find projects
        findProjects: async (query) => {
            const { filter, skip: page, limit, population } = aqp(query, {
                skipKey: 'page',
            })

            const offset = getOffset(page, limit)
            return await Project.find(filter)
                .populate(population)
                .limit(limit)
                .skip(offset)
                .exec()
        },
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
        addTasks: async (projectId, taskIds) => {
        }
    },
    Dropping: {

    }
}

module.exports = ProjectServices