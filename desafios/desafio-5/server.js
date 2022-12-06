const express = require('express')
const {engine} = require('express-handlebars')
const {webRouter} = require('./router/webRouter.js')

const app = express();


app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.engine('handlebars' , engine())
app.set('view engine', 'handlebars')


app.use(webRouter)

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`)
})
