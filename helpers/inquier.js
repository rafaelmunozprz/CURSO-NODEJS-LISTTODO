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
    const {option} = await inquirer.prompt(questions)
    return option 
}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}