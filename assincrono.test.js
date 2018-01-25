const test = require('ava')
const {create} = require('apisauce')

const gitApi = create({
  baseURL: 'https://api.github.com'
})
const patosApi = create({
  baseURL: 'http://localhost:3000/api'
})

test('Buscar usuário na api do git', t => {
  const getUser = user =>
    gitApi.get(`/users/${user}`)

  return getUser('ktabriga').then(response => {
    t.true(response.ok)
    t.is(response.data.login, 'ktabriga')
  })
})

test('Implemente função que busque uma lista de patos', t => {
  const getPatos = () => {}

  return getPatos().then(response => {
    t.true(response.ok)
    t.is(response.data.length, 4)
    t.is(response.data[0].nome, 'Donald')
  })
})


test('Implemente função que crie um pato na api', t => {
  const criarPato = pato => {}

  return criarPato({
    nome: 'Fernando',
    peso: 9
  }).then(response => {
    t.true(response.ok)
    t.truthy(response.data.id)
    t.is(response.data.nome, 'Fernando')
  })
})

test('Implemente função que busque um pato pelo id na api, altere seu nome e então atualize na api', t => {
  const atualizarPato = (id, nome) => {}
  return atualizarPato(1, 'NovoNome')
    .then(response => {
      t.true(response.ok)
      t.is(response.data.id, 1)
      t.is(response.data.nome, 'NovoNome')
    })
})
