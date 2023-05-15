function carregar() {
    // CHAMANDO ID DO HTML
var msg = document.getElementById('msg')
var img = dcument.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //Bom Dia!
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9'
} else if (hora >= 12 && hora <= 18) {
    //Boa Tarde
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
} else {
    //Boa Noite!
    img.src = 'noite.png'
    body.body.style.background = '#515154'
}
}
