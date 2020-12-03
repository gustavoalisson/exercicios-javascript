function resultadoDivisao(dividendo, divisor){
    const valor = dividendo / divisor
    console.log(`Resultado da divisão: ${Math.floor(valor) }`)
    const restoDivisao = dividendo % divisor
    console.log(`Resto ${restoDivisao}`)
}
resultadoDivisao(50,15)

