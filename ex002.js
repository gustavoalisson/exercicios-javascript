/*
Equilátero: Os três lados são iguais. 
Isósceles: Dois lados iguais. 
Escaleno: Todos os lados são diferentes.
 */

function triangulo(a,b,c){
    if(a === b && a === c){
        console.log('Triângulo Equilátero')
    }else if((a === b || a === c || b === c) ) {
        console.log('Triângulo isósceles')
    }else{
        console.log('Triângulo escaleno')
    }
}
triangulo(5,5,5)
triangulo(4,4,2)
triangulo(5,4,3)


