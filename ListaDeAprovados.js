const alunos =[
    {
        nome: 'João',
        nota: 10,
    },
    {
        nome: 'Tiago',
        nota: 4,
    },
    {
        nome: 'Rodolfo',
        nota: 3,
    },
    {
        nome: 'Sofia',
        nota: 2,
    },
    {
        nome: 'Ana',
        nota: 1,
    },
    {
        nome: 'Carolina',
        nota: 10,
    },
    {
        nome: 'Pedro',
        nota: 9,
    },
    {
        nome: 'Daniel',
        nota: 8,
    },
    {
        nome: 'Rafael',
        nota: 7,
    },
    {
        nome: 'Nathalia',
        nota: 6,
    }
]
function listaAprovados(array, media){
    let aprovados = [];
    for(let i = 0; i < array.length; i++){
        const {nota, nome} = array[i]; 
        if(nota >= 6){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(listaAprovados(alunos, 6))