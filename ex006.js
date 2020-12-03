function jurosSimples(capitalInicial, porcentagem, tempoAplicacao){
    let juros, montante, taxaJuros
    taxaJuros = (porcentagem / 100)
    juros = (capitalInicial * taxaJuros * tempoAplicacao)
    montante = capitalInicial + juros
    return parseFloat(montante).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
}

function jurosComposto(capitalInicial, porcentagem, tempoAplicacao){
    let montante, juros, taxaJuros
    taxaJuros = (porcentagem / 100)
    montante = capitalInicial *(1 + taxaJuros) ** tempoAplicacao
    juros = montante - capitalInicial
    return parseFloat(juros).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

}

console.log(jurosSimples(200, 10, 3))
console.log(jurosComposto(200, 10 , 3 ))