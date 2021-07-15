const colors = require('colors')
const { inquirerMenu, pause } = require('./helpers/inquier')
console.clear()

const main = async () => {
    let option = ''
    do {
        option = await inquirerMenu()
        await pause()
    } while (option !== '0')

    //pause()
}

main()