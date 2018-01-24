const test = require('ava')
const {testHelpers} = require('./lib')

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
    peso: 11
  },
  {
    nome: 'Feijão',
    cores: 'cinza,preto,branco,amarelo',
    peso: 9
  }    
]

test('Criar função que receba um nome e retorne uma string com uma saudação', t => {

  const resultado = saudacao('Mauricio')

  t.is(resultado, 'Hello to Javascript World Mauricio')	
})

test('Implementar função produto que receba um número x e retorne oura função que receba um número y e então retorne o produto dos valores ', t => {
  const x = 25
  const y = 5

  function produto(x) {
    return null
  }

  const produto5 = produto(x)
  const resultado = produto5(y)

  t.is(resultado, 125)   
})


test('Implementar função filtrarPatosPelaCor que dados uma cor e patos retorne um novo array com patos filtrados pela cor passada', t => {
  function filtrarPatosPelaCor(patos, cor) {
    return []
  }

  const resultado = filtrarPatosPelaCor(patos, 'amarelo')
  t.is(resultado.length, 2)
  t.is(resultado[0].nome, 'Alfredo')
  t.is(resultado[1].nome, 'Feijão')    
})

test('Criar novo array com o dobro dos valores anteriores', t => {
  const valores = [2, 5, 8, 20]
  const resultado = valores
  t.is(resultado[0], 4)
  t.is(resultado[1], 10)
  t.is(resultado[2], 16)
  t.is(resultado[3], 40)
})

test('Implementar função transformarCores que receba os patos e transforme seu campo cores em um array com todas as cores do pato', t => {
  function transformarCores(patos) {
    return []  
  }

  const resultado = transformarCores(patos)
  t.true(resultado.length > 0)
  resultado.forEach(testHelpers.verificaCoresPato(t))
  //exemplo resultado esperado {nome: 'mauricio', cores: ['branco', 'preto']}
})

test('Criar função que dobre o peso dos patos que possuam a cor branca', t => {

  const resultado =  []
  t.truthy(resultado[0])
  t.is(resultado[0].peso, 28)
  t.is(resultado[1].peso, 14)
  t.is(resultado[2].peso, 40)
  t.is(resultado[3].peso, 18)
})
