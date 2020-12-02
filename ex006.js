function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    let juros, montante
    juros = (capitalInicial * taxaJuros * tempoAplicacao) / 100
    montante = capitalInicial + juros
    return parseFloat(montante).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})
}

function jurosComposto(capitalInicial, taxaJuros, tempoAplicacao){
    let montante, juros
    taxaJuros = (taxaJuros / 100)
    montante = capitalInicial *(1 + taxaJuros) ** tempoAplicacao
    juros = montante - capitalInicial
    return parseFloat(juros).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

}

console.log(jurosSimples(200, 10, 3))
console.log(jurosComposto(200, 10 , 3 ))