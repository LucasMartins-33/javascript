/*

formula da tabuada 
var num = 2
var fim = 10

for (let i = 1; num <= fim; i++ ) {
    console.log(`${num} x ${i} = ${num * i}`)
}
*/

function gerar() {
    let num = window.document.querySelector('input#num')
    let tab = window.document.querySelector('select#tab')
    let fim = 10
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número! ')
    }
    else {
        n = Number(num.value) 
        tab.innerHTML = ' ' // resp.innerHTML = ' '
        for (let c = 1; c <= fim; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}` // Outras linguagens fazem uso desse comando
            //resp.innerHTML += `${n} x ${c} = ${n * c} <br>`
            tab.appendChild(item)
            
        }
    }
}