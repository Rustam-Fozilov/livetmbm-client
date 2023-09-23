import fs from 'fs'

export default function www () {
    // const fs = requirejs('fs')
    fs.readFile('./www.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err)
        }
        console.log(data)
    })
    return {
        info: 'info'
    }
}