function recebeValor(valor){
    return parseFloat(valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}).replace('.', ',')
}
console.log(recebeValor(0.30000000000000004))


// A função toLocaleString está convertendo para uma String 
// replace substitui o "." pela ","