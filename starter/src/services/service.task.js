// require models
const Task = require('../models/Task')
const Project = require('../models/Project')

// require services
// eventBus service
const eventbus = require('../services/service.role/service.eventBus')

const TaskServices = {
    // Task Model CRUD Services
    CRUD: {
        // Find all tasks
        findAll: async () => {
            return await Task.find({})
        },
        // Create new empty task
        create: async (reqBody) => {
            const { useCase } = reqBody

            if (useCase === 'CREATE_EMPTY_TASK') {
                const createData = {}
                const { name, description, startDate, endDate } = reqBody

                createData.name = name
                createData.description = description
                createData.date = {
                    start: startDate,
                    end: endDate
                }

                return await Task.create(createData)
            }
            if (useCase === 'CREATE_PROJECTED_TASK') {
                // throw new Error('Not implemented yet')
                const { name, description, startDate, endDate, projectId } = reqBody
                const createData = {
                    name: name,
                    description: description,
                    date: {
                        start: startDate,
                        end: endDate
                    },
                }

                const createdTask = await Task.create(createData)

                // run eventBus here
                // Emit event projectedTaskCreating
                // Before projected task created, sync data to Project model
                eventbus.emit('projectedTaskCreating', projectId, [createdTask._id])

                createdTask.projectInfo = await Project.findById(projectId)

                return await createdTask.save()
            }

            throw new Error('useCase is required')
        },
    },
}

module.exports = TaskServices