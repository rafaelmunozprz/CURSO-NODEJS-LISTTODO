const colors = require('colors')

const showMenu = () => {
    return new Promise((resolve, reject) => {
        
        console.log(`${'1.'.magenta} Create work`)
        console.log(`${'2.'.magenta} Show works`)
        console.log(`${'3.'.magenta} Show finished works`)
        console.log(`${'4.'.magenta} Show pending works`)
        console.log(`${'5.'.magenta} Finish work(s)`)
        console.log(`${'6.'.magenta} Detele work`)
        console.log(`${'0.'.magenta} Exit\n`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Select an otion: ', (option) => {
            readline.close()
            resolve(option)
        })
    })
}

const pause = () => {
    return new Promise((resolve, reject) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
        readline.question(`\nPress ${'ENTER'.magenta} to continue\n`, (option) => {
            readline.close()
            resolve()
        })
    })
}

module.exports = {
    showMenu,
    pause
}