

function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = Number(window.document.getElementById('nasc').value.length)
    let resp = window.document.getElementById('resp')
     if(nasc == 0 || nasc > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
     }
     else{
        let sexo = window.document.getElementsByName('sexo')
        let idade = ano - nasc
        resp.innerHTML = `idade ${idade} e sexo ${sexo}`
     }
}