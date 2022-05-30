function comparaNumeros(num1 , num2){

    var soma, igual, menorDez, menorVinte;
    
    (num1 == num2) ? (igual = 1) : (igual = 0);
    soma = num1 + num2;
    (soma < 10) ? (menorDez = 1) : (menorDez = 0);
    (soma < 20) ? (menorVinte = 1) : (menorVinte = 0);

    // if(igual){
    //     if(menorDez && menorVinte){
    //         console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é menor que 10 e menor que 20", num1, num2, soma);
    //     }else if(!menorDez && menorVinte){
    //         console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é maior que 10 e menor que 20", num1, num2, soma);
    //     }else if(menorDez && !menorVinte){
    //         console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é menor que 10 e menor que 20", num1, num2, soma);
    //     }else if(!menorDez && !menorVinte){
    //         console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é maior que 10 e maior que 20", num1, num2, soma);
    //     }
    // }else{
    //     if(menorDez && menorVinte){
    //         console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é menor que 10 e menor que 20", num1, num2, soma);
    //     }else if(!menorDez && menorVinte){
    //         console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é maior que 10 e menor que 20", num1, num2, soma);
    //     }else if(menorDez && !menorVinte){
    //         console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é menor que 10 e menor que 20", num1, num2, soma);
    //     }else if(!menorDez && !menorVinte){
    //         console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é maior que 10 e maior que 20", num1, num2, soma);
    //     }
    // } Fazendo comparativos melhores abaixo

    if(igual){
        if(!menorVinte){
            console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é maior que 10 e maior que 20", num1, num2, soma)
        }else if(menorDez){
            console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é menor que 10 e menor que 20", num1, num2, soma);
        }else if(!menorDez && menorVinte){
            console.log("Os numeros %d e %d são iguais. Sua soma é %d, que é maior que 10 e menor que 20", num1, num2, soma);
        }
    }else{
        if(!menorVinte){
            console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é maior que 10 e maior que 20", num1, num2, soma)
        }else if(menorDez){
            console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é menor que 10 e menor que 20", num1, num2, soma);
        }else if(!menorDez && menorVinte){
            console.log("Os numeros %d e %d são diferentes. Sua soma é %d, que é maior que 10 e menor que 20", num1, num2, soma);
        }
    }

    

}

console.log(comparaNumeros(2,2));