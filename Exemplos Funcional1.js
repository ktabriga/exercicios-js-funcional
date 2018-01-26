/*###################
Funões puras
###################*/

function dobro(x) {
    return 2 * x
}

function criarPato(nome) {
    return {
        nome: nome,
        souUmPato: true
    }
}

//Efeito colateral
function salvarPato(pato) {
    bancoDadosPato.salvar(pato)
}

//Efeito colateral 
let ultimoNome = ''
function nomePato(nome) {
    if (nome) {
        ultimoNome = nome
    }
    return ultimoNome
}

/*###################
Imutabilidade
###################*/

const raio = 17.8

function aumentarPeso(pato, adicional) {
    return {
        nome: pato.nome,
        peso: pato.peso + adicional
    }
}
const pato = {
    nome: 'Donald',
    peso: 10
}
const novoPato = aumentarPeso(pato, 5)
console.log(novoPato)
//{nome: 'Donald', peso: 15}

//Nunca alterar valor vindo por parâmetro
function aumentarPeso(pato, adicional) {
    pato.peso = pato.peso + adicional
}

/*###################
High order functions
###################*/

function voar(aoTerminar) {
    console.log('Voando')
    aoTerminar()
}
voar(() => console.log('Terminou de voar'))
// Voando
// Terminou de voar

function maiorQue(valor) {
    return (segundoValor) => {
        return segundoValor > valor
    }
}

const maiorQue10 = maiorQue(10)
maiorQue10(12) //true
maiorQue10(8) //false

/*###################
First Class Object
###################*/

const maiorQue = valor => {
    return segundoValor => {
        return segundoValor > valor
    }
}
const maiorQue10 = maiorQue(10)
maiorQue10(12) //true
maiorQue10(8) //false

// Menos syntaxe
const maiorQue = valor =>  segundoValor =>  segundoValor > valor

/*###################
Imperativo - microgerência
###################*/

const patos = [
    {nome: 'Donald', peso: 15},
    {nome: 'Tio Patinhas', peso: 10},
    {nome: 'Super Pato', peso: 8},
    {nome: 'Mauricio', peso: 20},
]

let patosGordos = []

for (let index = 0; index < patos.length; index++) {
    const pato = patos[index];
    if (pato.peso > 12) {
        patosGordos.push(pato)
    }
}

console.log(patosGordos) 
// [{nome: 'Donald, peso: 15}, {nome: 'Mauricio', peso: 20}]

/*###################
Filter
###################*/
const patosGordos = patos.filter(pato => pato.peso > 12)

//mais significativo
const ehUmPatoGordo = pato => pato.peso > 12
const patosGordos = patos.filter(ehUmPatoGordo)

const pato = {peso: 12, nome: 'Mauricio'}

/*###################
Map
###################*/
const assarPato = pato => {
    return {
        peso: pato.peso - 4,
        bemPassado: true
    }
}

const patosAssados = patos
    .filter(ehUmPatoGordo)
    .map(assarPato)
console.log(patosAssados)
//{peso: 11, bemPassado: true}
//{peso: 16, bemPassado: true}

/*###################
Reduce
###################*/

const somarPesos = (pesoAcumulado, pato) => {
    return pesoAcumulado + pato.peso
}

const pesoTotal = patos.reduce(somaPesos, 0)


