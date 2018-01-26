const test = require('ava')
const {testHelpers} = require('./lib')
const patos = require('./patos')


test('1 - Criar função que receba um nome e retorne uma string com uma saudação', t => {

  const resultado = saudacao('Mauricio')

  t.is(resultado, 'Hello to Javascript World Mauricio')	
})

test.only('2 - Implementar função "valorPassagem" que receba o valor da passagem e retorne uma outra função "totalGrupo" que quando invocada passando a quantidade de pessoas, retorne o valor total de passagem para o grupo.', t => {
  const valor = 30

  function valorPassagem(valor) {
    return null
  }

  const totalGrupo = valorPassagem(valor)
  const total8 = totalGrupo(8)
  const total15 = totalGrupo(15)

  t.is(total8, 240)   
  t.is(total15, 450)   
})


test('3 - Implementar função filtrarPatosPelaCor que dados uma cor e patos retorne um novo array com patos filtrados pela cor passada', t => {
  function filtrarPatosPelaCor(patos, cor) {
    return []
  }

  const resultado = filtrarPatosPelaCor(patos, 'amarelo')
  t.is(resultado.length, 2)
  t.is(resultado[0].nome, 'Alfredo')
  t.is(resultado[1].nome, 'Feijão')    
})

test('4 - Criar novo array com o dobro dos valores anteriores', t => {
  const valores = [2, 5, 8, 20]
  const resultado = valores
  t.is(resultado[0], 4)
  t.is(resultado[1], 10)
  t.is(resultado[2], 16)
  t.is(resultado[3], 40)
})

test('5 - Implementar função transformarCores que receba os patos e transforme seu campo cores em um array com todas as cores do pato', t => {
  function transformarCores(patos) {
    return []  
  }

  const resultado = transformarCores(patos)
  t.true(resultado.length > 0)
  resultado.forEach(testHelpers.verificaCoresPato(t))
  //exemplo resultado esperado {nome: 'mauricio', cores: ['branco', 'preto']}
})

test('6 - Criar função que dobre o peso dos patos que possuam a cor branca', t => {

  const resultado =  []
  t.truthy(resultado[0])
  t.is(resultado[0].peso, 28)
  t.is(resultado[1].peso, 14)
  t.is(resultado[2].peso, 40)
  t.is(resultado[3].peso, 18)
})

test('7 - Criar funçao que dados os patos, retorne o peso médio deles', t => {
  const resultado =  0
  t.is(resultado, 12)
})
