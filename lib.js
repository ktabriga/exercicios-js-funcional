const todasCores = ['preto', 'branco', 'cinza', 'amarelo']
exports.testHelpers = {
  verificaCoresPato: t => pato => {
    t.true(Array.isArray(pato.cores))
    t.true(pato.cores.length > 0)
    pato.cores.forEach(cor => t.true(todasCores.includes(cor)))
  } 
}
