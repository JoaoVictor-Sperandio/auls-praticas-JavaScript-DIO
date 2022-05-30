function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.anos + anos
    } anos de idade.`;
}
const pessoa = {
     nome: "Maria",
     anos: 20
}

console.log(calculaIdade.call(pessoa, 30));

