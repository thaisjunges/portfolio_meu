function carregar() {
    //BUSCA MENSAGEM DO HTML
    var msg = window.document.getElementById('msg')
    //BUSCA A IMAGEM DO HTML
    var img = window.document.getElementById('imagem')
    //DATA ATUAL
    var data = new Date()
    //HORA ATUAL
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/manha.png'
        document.body.style.background = '#d89e68'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'img/tarde.png'
        document.body.style.background = 'b4b23463'
    } else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#1615158a'
    }
}
