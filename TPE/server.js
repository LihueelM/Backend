const express = require('express')
const {routerApi} = require("./routers/routerApi.js")

const app = express();

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/views' , express.static('views'))
//rutas
app.use('/api' , routerApi)


const PORT = process.env.PORT ?? 8080
const server = app.listen(PORT , () => {
    console.log(`Conectado al puerto (${server.address().port})`)
})



