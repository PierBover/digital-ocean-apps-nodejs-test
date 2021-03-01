const fastify = require('fastify')({ logger: true });

fastify.get('/', {
	handler (request, reply) {
		return 'Hello world!';
	}
})

const start = async () => {
	try {
		await fastify.listen(3000, '0.0.0.0');
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

start();