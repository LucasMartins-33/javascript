function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // Variável para testar as horas e o carregamento das imagens
    //var hora = 23
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#e2cd9f'
    }

    else if (hora >= 12 && hora <= 18) {
        //Boa tarde!!
        img.src = 'imagens/tarde.png'
        window.document.body.style.background ='#b9846f'
    }

    else {
        //Boa noite
        img.src = 'imagens/noite.png'
        window.document.body.style.background ='#213B42'
    }


}

