const express = require('express')
const {engine} = require('express-handlebars')
const {router} = require('./routers/router.js')

const app = express();
exports.app = app

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

//handlebars template
app.engine('handlebars' ,engine())
app.set('view engine' , 'handlebars')


app.use(router);


let PORT = 8080;
const server = app.listen(PORT , () => {
    console.log(`Conectado al puerto ${server.address().port}`);
})

