/*
    Considerando que a string só terá 1 palavra!
*/
//Primeira solução
function verificaPalindromo(string){
    if(!string) return "String inválida!";
    return string.split("").reverse().join("") === string
}

console.log("Teste do primeiro verificador");
console.log(verificaPalindromo(""));
console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("ama"));
console.log(verificaPalindromo("osso"));
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("roedor"));

//Segunda Solução

function verificaPalindromo2(string){
    if (!string) return "String inválida!";

    for(let i = 0; i < string.lenght/2; i++){
        if(string[i] !== string.lenght - 1 - i){
            return false;
        }
    }
    return true
}

console.log("Teste do primeiro verificador");
console.log(verificaPalindromo(""));
console.log(verificaPalindromo("ana"));
console.log(verificaPalindromo("ama"));
console.log(verificaPalindromo("osso"));
console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("roedor"));
