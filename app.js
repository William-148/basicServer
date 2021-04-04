const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./Routes/routes');

const app = express();
const corsOptions = { origin: true, optionsSuccessStatus: 200 };

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(morgan('dev'));
app.use('/api', routes);

module.exports = app;
