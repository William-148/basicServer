const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const { dirname } = require('path');

app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

var publicPath = path.join(__dirname,'/view');
app.use(express.static(__dirname +'/views'));



app.use(bodyParser.urlencoded({extended:false}));
//middlewares

//routes
/*app.get('/',(req,res) =>{
    res.render('venta', {title:'Page Sales'});
});*/


app.use(require('./routes/index'));

/*
app.post('/insertar',(req,res) =>{
    //return res.redirect('/practice');
    console.log("insertando");
    console.log("primer nombre" + req.body.nombre);
    res.end();
});
*/

app.get('/productos',(req,res) =>{
   var data = {age:29,job:'ninga'} ;
   res.render('profile',{data: data});
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('server on port: ', port);
});