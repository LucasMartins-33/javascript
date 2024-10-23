function contar () {
    let inicio = Number(window.document.querySelector('input#inicio').value)
    let fim = Number(window.document.querySelector('input#fim').value)
    let passo = Number(window.document.querySelector('input#passo').value)
    let resp = window.document.querySelector('div#resp')

    if (inicio == '') {
        resp.innerHTML = 'Impossível contar!'
    }
    else if (passo == 0) {
        window.alert('Passo inválido. Considerando PASSO igual à 1')
        passo = 1
        resp.innerHTML = ' contador: <br>'
        for (let contador = inicio; contador <= fim; contador += passo) {
            resp.innerHTML += ` ${contador} &#x27a1 `
        }
    }
    else {
        resp.innerHTML = 'Contador: <br>' //Inicia a contagem na div
        for (let contador = inicio; contador <= fim; contador += passo) {
             resp.innerHTML += ` ${contador} &#x27a1;` // Adiciona à sequência existente, sem sobreescrever o valor anterior
        }
    }
    resp.innerHTML += ` Fim &#x1f3c1`
}