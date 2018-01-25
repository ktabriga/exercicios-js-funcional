'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);

  server.models.Pato.create({nome: 'Donald', peso: 12, idade: 8})
  server.models.Pato.create({nome: 'Alfredo', peso: 8, idade: 4})
  server.models.Pato.create({nome: 'Joaquim', peso: 12, idade: 9})
  server.models.Pato.create({nome: 'Doralice', peso: 7, idade: 5})
};
