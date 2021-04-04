const express = require('express');
const api = express.Router();
const mysql = require ('mysql')
const config = {
	host: '192.168.1.50',
	database: 'LIBRO',
	user: 'will',
	password:'admin',
};

const pool = mysql.createPool(config);

api.get('/', (req, res) => {
	res.status(200).send('Welcome to port 4000!');
});

api.get('/book', (req, res) => {
	let books = [];	
	pool.query('SELECT * FROM librito', (error, result) => {
		if (error) res.status(400).send(error);
		res.status(200).send(result);
    });
});

api.post('/books', async (req, res) => {
	//const data = {nombre:"Centro de la Tierra", autor:"Julio Verne", fecha:"12/12/12", genero:"Aventura" }
	pool.query('INSERT INTO librito SET ?', req.body,(error, result) => {
        if (error) res.status(400).send(error);
		res.status(200).send({body:"Se agregó el usuario correctamente"});
    });
});

module.exports = api;
