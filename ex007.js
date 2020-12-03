function formulaBhaskara(ax, bx, c){
    delta = Math.pow(bx, 2) - 4 * ax * c
    if(delta < 0){
        return 'Delta é negativo'
    }else{
        let x1, x2
        x1 = (-bx + Math.sqrt(delta)) / (2 * ax)
        x2 = (-bx - Math.sqrt(delta)) / (2 * ax)
        return [x1, x2] 
    }
}

console.log(formulaBhaskara(2,12,-14))
console.log(formulaBhaskara(1,-1,-6))