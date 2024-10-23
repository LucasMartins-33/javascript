function carregar() {
    let img = window.document.querySelector('img#imagem')
    let msg = window.document.querySelector('div#msg')
    let data = new Date();
    let hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = 'fototarde.png'
        window.document.body.style.background = '#b9846f'
    }

    else {
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#213b42'
    }
}