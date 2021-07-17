const fs = require('fs')
const colors = require('colors')
const DIR = './database/data.json'

const saveData = (data) => {
    fs.writeFile(DIR, JSON.stringify(data), (err) => {
        if (err) throw err
        console.log('File "data.json" created'.green)
    })
}

const readData = () => {
    if (!fs.existsSync(DIR)) return null
    const data = fs.readFileSync(DIR, { encoding: 'utf-8' })
    console.log(data)
    return null
}

module.exports = {
    saveData,
    readData
}