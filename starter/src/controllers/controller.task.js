// require services
// model service
const TaskServices = require('../services/service.task')

const TaskControllers = {
// for get methods
// for post methods
    // create a task
    postTask: async (req, res) => {
        try {
            const result = await TaskServices.CRUD.create(req.body)

            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    },
}

module.exports = TaskControllers