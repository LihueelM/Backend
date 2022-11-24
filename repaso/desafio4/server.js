const express = require('express')
const {router} = require('./routers/router.js')

const app = express();
exports.app = app

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/api', router);


let PORT = 8080;
const server = app.listen(PORT , () => {
    console.log(`Conectado al puerto ${server.address().port}`);
})

