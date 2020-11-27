function resultadoDivisao(dividendo, divisor){
    let valor = dividendo / divisor
    console.log(`Resultado da divisão: ${Math.floor(valor) }`)
    let restoDivisao = dividendo % divisor
    console.log(`Resto ${parseInt(restoDivisao)}`)
}
resultadoDivisao(50,10)

