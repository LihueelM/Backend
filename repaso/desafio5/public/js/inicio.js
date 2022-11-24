async function main(){
    const response = await fetch('templates/inicio.handlebars')
    const templateText = await response.text()
    const templateFb = Handlebars.compile(templateText)
    const html = templateFb({titulo: 'Cargue sus productos'})
    document.getElementById('espacioParaContenido').innerHTML = html
}

main()