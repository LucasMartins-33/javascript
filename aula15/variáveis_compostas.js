let num = [5, 8, 2, 9, 3]
num.push(1) // Vai colocar o número 1 no final do nosso vetor, adicionando o valor na última casa automaticamente
num.sort() // Colocando os valores em ordem crescente
console.log(num)
console.log(`Nosso vetor é o ${num.length}`) // Ler o comprimento/número de elementos do meu vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)  // Posso também escolher um elemento do vetror para mostrar


for (pos = 0; pos < num.length; pos++  ) {
    console.log(num[pos])
}