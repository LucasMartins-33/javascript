function verificar() {
    var data = new Date() // Comando para pegar a data atual
    var ano = data.getFullYear() // Comando para pegar o ano com 4 dígitos
    var formulario_ano = window.document.getElementById('ano_de_nascimento')
    var resposta = window.document.getElementById('resposta') // var resposta = window.document.querySelector('div#resposta') //Outra forma 
    // Comando que verifica se o ano está vazio ou é maior que o ano atual
    if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamnete! ')
    }
    else {
        var formulario_sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(formulario_ano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')

        if (formulario_sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'crianca_menino.jpg')
            }
            else if (idade > 10 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovem_homem.jpg')
            }
            else if (idade > 21 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adulto_homem.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'velho_homem.jpg')
            }
        }
        else if (formulario_sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'crianca_menina.jpg')
            }
            else if (idade > 10 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovem_mulher.jpg')
            }
            else if (idade > 21 && idade <= 50) {
                //Adulto
                img.setAttribute('src', 'adulto_mulher.jpg')
            }
            else {
                //Idoso
                img.setAttribute('src', 'velho_mulher.jpg')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`
        resposta.appendChild(img)
    }

}