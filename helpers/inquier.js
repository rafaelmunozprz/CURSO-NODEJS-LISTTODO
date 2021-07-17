const inquirer = require('inquirer')
const colors = require('colors')
const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?\n',
        choices: [
            { value: '1', name: `${'1.'.magenta} Create work` },
            { value: '2', name: `${'2.'.magenta} Show tasks` },
            { value: '3', name: `${'3.'.magenta} Show finished tasks` },
            { value: '4', name: `${'4.'.magenta} Show pending tnasks` },
            { value: '5', name: `${'5.'.magenta} Finish task(s)` },
            { value: '6', name: `${'6.'.magenta} Detele task` },
            { value: '0', name: `${'0.'.magenta} Exit` },
        ]
    }
]

const inquirerMenu = async () => {
    console.clear()
    console.log('========================'.magenta)
    console.log('====SELECT AN OPTION===='.magenta)
    console.log('========================'.magenta)
    const { option } = await inquirer.prompt(questions)
    return option
}


const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.magenta} to continue\n`
        }
    ]
    await inquirer.prompt(question)
}

/**
 * @param {String} message name of the new task
 */
const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'description',
            message,
            validate(value) {
                if (value.length === 0) {
                    return "Please write the taks's name"
                }
                return true
            }
        }
    ]
    const { description } = await inquirer.prompt(question)
    return description
}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}