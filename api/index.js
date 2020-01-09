const http = require('http');
const server = require('./server');

async function bootstrap() {
    await require('./utils/database').connect().then(() => console.log('🚀 Database connected!'));
    return http.createServer(server.callback()).listen(process.env.PORT ? process.env.PORT : 3000);
}

bootstrap()
    .then(server => console.log(`🚀 Server listening on port ${server.address().port}!`))
    .catch(err => {
        console.log(err)
        process.exit(1)
    });