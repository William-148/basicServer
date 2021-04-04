const app = require('./app');
const PORT = 4000;
const HOST = '192.168.1.103';

app.listen(PORT, () => {
	console.log(`Server Listening on port: ${PORT}`);
});
