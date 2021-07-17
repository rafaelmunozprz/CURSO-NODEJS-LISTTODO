const Task = require('./task')

/**
 * _list:
 *  {'uuid-123165-131315: {id: 1, description: asdasdasd, date_finished: 1992}'}
 */
class Tasks {
    _list = {}

    /**
     *@function listArray returns the task list 
     */
    get listArray() {
        const list = []
        Object.keys(this._list).forEach(key => {
            const task = this._list[key]
            list.push(task)
        })
        return list
    }

    constructor() {
        this._list = {}
    }

    /**
     * 
     * @param {String} description task's name value in the _list
     */
    createTask(description = '') {
        const task = new Task(description)
        this._list[task.id] = task
    }
}

module.exports = Tasks