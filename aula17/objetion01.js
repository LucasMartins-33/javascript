let amigo = {nome: 'José', 
    sexo: 'M', 
    peso: 85.4, 
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
}}
console.log(amigo)
console.log(amigo.nome)
console.log(`${amigo.peso} pesa ${amigo.peso} kg`)
amigo.engordar(2) // Adicionando dois kg 
console.log(`${amigo.peso} pesa ${amigo.peso} kg`)
