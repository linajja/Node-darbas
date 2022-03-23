
import { readFile } from 'fs'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (req, res) => {

    readFile('order.json', 'utf8', (err, data) => {
        if (err) {
            res.json({ status: 'failed' })
        } else {
            data = JSON.parse(data)
            res.json({ status: 'success', data })
        }
    })

    //res.json( {message: 'Pirma perduota reiksme'} )
})

app.listen(5001, () => {
    console.log('Serveris veikia')
})