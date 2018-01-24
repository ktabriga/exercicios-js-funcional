const test = require('ava')
const todasCores = ['preto', 'branco', 'cinza', 'amarelo']
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

test('Implementar função que receba os patos e transforme o campo cores em um array com todas as cores', t => {
  function normalizarPatos(patos) {
    return []
  }

  const resultado = normalizarPatos(patos)
  t.true(resultado.length > 0)
  resultado.forEach(pato => {
    t.true(Array.isArray(pato.cores))
    t.true(pato.cores.length > 0)
    pato.cores.forEach(cor => t.true(todasCores.includes(cor)))
  })
})
