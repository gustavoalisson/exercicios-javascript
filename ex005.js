function recebeValor(valor){
    const resultado = parseFloat(valor).toFixed(2).toString().replace('.', ',')
    return `R$ ${resultado}`
    //.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}
console.log(recebeValor(0.30000000000000004))
console.log(recebeValor(3000))


// A função toLocaleString está convertendo para uma String 
// replace substitui o "." pela ","