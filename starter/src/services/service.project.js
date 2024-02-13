//
const aqp = require('api-query-params')

// Require models
const Project = require('../models/Project')

// Require services
const UserServices = require('./service.user')
const CustomerServices = require('./service.customer')

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
        // Update project by id
        updateById: async (id, updateData) => {
            return await Project.updateOne(
                { _id: id },
                updateData,
                // This option is for validating when update
                { runValidators: true }
            )
        },
        // Soft delete project by id
        deleteOneById: async (id) => {
            return await Project.deleteById({ _id: id })
        }
    },
    ReEmbedding: {
        // re-embed leader info
        emLeaderInfo: async (leaderId) => {
            const project = await Project.findOne({
                'leaderInfo._id': leaderId
            })

            project.leaderInfo = await UserServices.CRUD.findById(leaderId);

            await project.save()
        },
        // re-embed customer info
        ecCustomerInfo: async (customerId) => {
            const project = await Project.findOne({
                'customerInfo._id': customerId
            })

            project.customerInfo = await CustomerServices.CRUD.findById(customerId)

            await project.save()
        }
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
        // Drop a user from project
        dropUsers: async (projectId, userIds) => {
            const project = await Project.findById(projectId).exec()

            userIds.forEach(userId => {
                if (!project.usersInfo.includes(userId))
                    project.usersInfo.pull(userId)
            })

            return await project.save()
        },
    },
    Restoring: {

    }
}

module.exports = ProjectServices