/* 
Trocar todos os elementos pares pelo numero 0, se o array for vazio, returnar -1
*/

function subsPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Já é 0");
        }else if(array[i] % 2 === 0){
            console.log(`substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }
    return array;
}



let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

subsPares(array);
console.log(array);