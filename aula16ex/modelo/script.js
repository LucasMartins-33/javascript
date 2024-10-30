let num = window.document.querySelector('input#add')
let lista = window.document.querySelector('select#lista')
let resp = window.document.querySelector('div#resp')
let valores = [] // Vetor

// Verificando se os valores são números e estão entre 1 e 100
function isNumero(n) {
    // Essa if varifica se o número está entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100 ) {
        return true
    }else {
        return false
    }

}
// Verificando se os valores estão na lista
function inLista(n, l) {
    // Esse if verifica se o valor está ou não na lista, pois -1 significa valores que não existe na lista, por isso todo número diferente de -1, significa que ele está na lista.
    if (l.indexOf(Number(n)) != -1 ) {
        return  true
    }else {
        return false
    }

}
// Vai disparar a função se isNumero for um número e estiver entre 1 e 100 e se !inLista não estiver na lista, porque não queremos ter valores repetidos
function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Adiciona os números no vetor Valores
        let item = window.document.createElement('option') // Variável que cria o elemento option
        item.text = `O valor ${num.value} foi adicionado` 
        lista.appendChild(item) // Comando que adiciona o conteúdo no select
        resp.innerHTML = '' // Faz com que o resultado se torne vazio sempre que eu adicionar um novo número após ter clicado no botão finalizar
    }else {
        window.alert('Valor invalido ou já na lista')
    }
    num.value = ' ' // Comando para esvaziar a resposta
    num.focus() // Faz como se a pessoa já tivesse clicado na caixa de escolha dos números.
}

function finalizar () {
    let soma = valores.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // Realiza a soma em um vetor
    resp.innerHTML = ' '
    if (valores.length == 0) {
        window.alert('Valor invalido')
    } else {
        resp.innerHTML = `Ao todo temos ${valores.length} números cadastrados. <br>`
        //  Quando você usa ...numeros, ele "expande" o array em elementos individuais, transformando Math.max(...numeros) em Math.max(5, 10, 20). Isso permite que Math.max compare cada valor separadamente e retorne o maior deles. O operador ... é uma maneira muito prática de passar elementos de um array como argumentos separados para funções que esperam uma lista de valores individuais.
        resp.innerHTML += `O maior valor informado foi o ${Math.max(...valores)}. <br>` // Pega o maior valor de um vetor
        resp.innerHTML += `O menor valor informado foi o ${Math.min(...valores)}. <br>` // Pega o menor valor de um vetor
        resp.innerHTML += `Somando todos os valores temos ${soma}. <br>`
        resp.innerHTML += `A média dos valores é de ${soma / valores.length}` // Tira a média
    }
}





