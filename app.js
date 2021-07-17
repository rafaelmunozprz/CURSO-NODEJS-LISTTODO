const colors = require('colors')
const { inquirerMenu, pause, readInput } = require('./helpers/inquier')
const { saveData, readData } = require('./helpers/saveFile')
const Tasks = require('./models/tasks')

const main = async () => {
    let option = ''
    const tasks = new Tasks()
    const readDB = readData()
    if(readDB){

    }
    await pause()
    do {
        option = await inquirerMenu()
        switch (option) {
            case '1':
                /** Create task */
                const name = await readInput("Task's name: ".magenta)
                tasks.createTask(name)
                break
            case '2':
                console.log(tasks.listArray)
                break
            case 3:

                break
            case 4:

                break
            case 5:

                break
            case 6:

                break
        }
        saveData(tasks.listArray)
        await pause()
    } while (option !== '0')
}

main()