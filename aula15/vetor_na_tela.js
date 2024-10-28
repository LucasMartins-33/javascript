

let valores = [8, 1, 7, 4, 2, 9]

/*
console.log('Os valores do vetor em suas posições: ')
for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

*/

// for mais simplificado e otimizado para variáveis compostas e objetos, for in

for (let pos in valores) { // como se lê: Para cada posição em valores, eu vou mostrar o valores[pos]
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}