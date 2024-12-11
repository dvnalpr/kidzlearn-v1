const Hapi = require('@hapi/hapi');
const routes = require('../server/routes');

require('dotenv').config(); // Load environment variables

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 9000,
    host: '0.0.0.0',
  });

  // Register routes
  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();