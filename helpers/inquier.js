const inquirer = require('inquirer')
const colors = require('colors')
const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?\n',
        choices: [
            { value: '1', name: '1. Create work' },
            { value: '2', name: '2. Show works' },
            { value: '3', name: '3. Show finished works' },
            { value: '4', name: '4. Show pending works' },
            { value: '5', name: '5. Finish work(s)' },
            { value: '6', name: '6. Detele work' },
            { value: '0', name: '0. Exit' },
        ]
    }
]

const inquirerMenu = async () => {
    //console.clear()
    console.log('========================'.magenta)
    console.log('====SELECT AN OPTION===='.magenta)
    console.log('========================'.magenta)
    const {option} = await inquirer.prompt(questions)
    return option
}

const pause = async () => {
    const {option} = await inquirer.prompt(questions)
    return option 
}

module.exports = {
    inquirerMenu,
    pause
}