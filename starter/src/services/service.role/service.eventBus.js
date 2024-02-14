// require event emitter
const events = require('events')
const eventbus = new events.EventEmitter()

// require service
const ProjectService = require('../service.project')

// Event Listeners
// For after user updated
eventbus.on('userUpdated', async (userId) => {
    // this is a re-embedding process
    // also waiting for UserServices.CRUD.findById(userId)
    await ProjectService.ReEmbedding.emLeaderInfo(userId)
})
// For after customer updated
eventbus.on('customerUpdated', async (customerId) => {
    // this is a re-embedding process
    // also waiting for CustomerServices.CRUD.findById(customerId)
    await ProjectService.ReEmbedding.ecCustomerInfo(customerId)
})
// For creating a projected task
eventbus.on('projectedTaskCreating', async (projectId, taskId) => {
    // this is an adding process
    await ProjectService.Adding.addTasks(projectId, taskId)
})

module.exports = eventbus