function formulaBhaskara(ax, bx, c){
    delta = Math.pow(bx, 2) - 4 * ax * c
    if(delta < 0){
        return 'Delta é negativo'
    }else{
        let x1, x2
        let vetor = [x1,x2]
        vetor[0] = (-bx + Math.sqrt(delta)) / (2 * ax)
        vetor[1] = (-bx - Math.sqrt(delta)) / (2 * ax)
        return 'x1= ' + vetor[0] + ' ' + 'x2= ' +  vetor[1] 
    }
}

console.log(formulaBhaskara(2,12,-14))
console.log(formulaBhaskara(1,-1,-6))