var idade = 70
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não tem idade para votar. `)
}
// || significa ou
else if (idade < 18 || idade >= 65) { 
    console.log(`Voto opicional`)
}

else {
    console.log(`Voto obrigatório. `)
}