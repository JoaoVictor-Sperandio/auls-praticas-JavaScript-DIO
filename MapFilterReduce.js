//Utilizando "this" e depois sem "this"
/*
const maca = {
    value : 2,
}

const laranja = {
    value : 3,
}

const uva = {
    value : 4,
}

function mapComThis(array, thisArg){
    return array.map(function(item){
        return item * this.value
    }, thisArg);
}

const nums = [1 , 2];

console.log("this -> maçã", mapComThis(nums, maca));
console.log("this -> laranja", mapComThis(nums, laranja));
console.log("this -> uva", mapComThis(nums, uva));


//multiplicando todos os itens de um array por 2
function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    })
}

const nums2 = [ 3, 6 , 7, 8, 10];

console.log(mapSemThis(nums));
console.log(nums);
console.log(mapSemThis(nums2));
console.log(nums2);
*/


//Filter
/*
function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

console.log(filtraPares(meuArray));
*/


//Um exercicio com valor padrao setado e um sem valor setado
/*
function somaNumeros(array){
    return array.reduce(function(prev, current){
        return prev + current;
    })
}

const meuArray = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192];

console.log(somaNumeros(meuArray));
*/



const lista = [
    {
        name: "sabão em pó",
        preco: 25,
    },
    {
        name: "Cereal",
        preco: 12,
    },
    {
        name: "Toalha",
        preco: 35,
    }
]

const saldoDisponivel = 100;

function calcSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco
    }, saldoDisponivel);
}

console.log(calcSaldo(saldoDisponivel, lista));
