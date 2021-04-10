const express = require('express');
const router = express.Router();
const mysql = require ('mysql')
const config = {
    connectionLimit:1000,
    connectTimeout:60*60*1000,
    acquireTimeout:60*60*1000,
    timeout:60*60*1000,
	host: '192.168.128.50',
	database: 'LIBRO',
	user: 'will',
	password:'admin',
};

const pool = mysql.createPool(config);

router.get('/',(req,res) =>{
    res.render('venta.html',{title:'first website'});
});

router.get('/show', (req,res) =>{
	pool.query('SELECT * FROM librito', (error, result) => {
		if (error) res.status(400).send(error);
        res.render('show.html',{productos:result});
        console.log(result)
		res.end();
    });
});

router.post('/insertar',(req,res) =>{
    console.log(req.body)
    pool.query('INSERT INTO librito SET ?', req.body,(error, result) => {
        if (error) res.status(400).send(error);
        res.render('venta.html',{title:'first website'});
		res.end()
    });
});

module.exports = router;