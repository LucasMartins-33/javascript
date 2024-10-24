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
    let resp = window.document.querySelector('div#resp')
    let fim = 10
    n = Number(num.value)
    resp.innerHTML = ' '
    for(let c = 0; c <= fim; c++) {
        resp.innerHTML += `${n} x ${c} = ${n * c} <br>`
    }
}