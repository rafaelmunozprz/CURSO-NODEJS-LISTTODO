const { v4: uuidv4 } = require('uuid')

class Task {
    id = ""
    description = ""
    date_finished = null

    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        this.id = uuidv4()
        this.description = description
        this.date_finished = null
    }
}

module.exports = Task;