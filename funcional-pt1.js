const test = require('ava')
const patos = [
    {
        nome: 'Mauricio',
        cores: 'preto,branco',
        peso: 14
    },
    {
        nome: 'Francisco',
        cores: 'preto',
        peso: 10
    },
    {
        nome: 'Doralice',
        cores: 'branco',
        peso: 7
    },
    {
        nome: 'Alfredo',
        cores: 'branco,amarelo',
        peso: 20
    },
    {
        nome: 'Joaquim',
        cores: 'cinza,preto',
        peso: 20
    },
    {
        nome: 'Feijão',
        cores: 'cinza,preto,branco,amarelo',
        peso: 20
    }    
]

test('Criar função que receba um nome e retorne uma string com uma saudação', t => {
    
    const saudacao = ola('Maria')

    t.is(saudacao, 'Bem vindo ao mundo do Javascript Maria')	
})

test('Implementar função que receba um número x e retorne oura função que receba um número y e retorne o produto dos valores ', t => {
    const x = 25
    const y = 5

    function produto(x) {
    }

    const produto5 = produto(x)
    const resultado = produto5(y)
    
    t.is(resultado, 125)   
})


test('Implementar função que dados uma cor e patos retorne um novo array com patos filtrados pela cor passada', t => {
    function filtrarPatosPelaCor(patos, cor) {
        return []
    }
    
    const resultado1 = filtrarPatosPelaCor(patos, 'amarelo')
    t.is(resultado1.length, 2)
    t.is(resultado1[0].nome, 'Alfredo')
    t.is(resultado1[1].nome, 'Feijão')    
})
