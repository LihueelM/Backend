const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('public'))
//Seteamos el path donde tiene que buscar el archivo a cambiar
app.set('views' , '/views')

//Añadimos plantilla custom
//app.engine requiere el nombre de la extencion, luego la ruta, las opciones y el callback que llamara la plantilla al terminar el proceso
//al ser async primero se ejecuta el app.get
app.engine('lihue', async (filePath, options, callback) => {
        try {
            const content = await fs.promises.readFile(filePath, 'utf-8' );
            const rendered = content.toString()
                for(const key in options) {
                    rendered = rendered.replace(`{{${key}}}`, options[key])
                }                
            return callback(null, rendered)    

        } catch (error) {
            return callback(new Error(err))
        }        
    
})

app.get('/', (req, res) => {
    //res.sendFile('index.html' , {root: './views'})
    //Aqui es donde va a buscar donde tiene que realizar el cambio
    res.render('index.lihue', {contenido: 'hardcoding'})
})

const PORT = 8080;
const server = app.listen(PORT , ()=> {
    console.log(`Conectado al servidor: ${server.address().port}`)
})
