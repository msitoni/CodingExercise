const express = require('express');
const app = express();
var cors = require('cors');

const index = require('./routes/index');
const farmsRoute = require('./routes/farms.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', farmsRoute);

module.exports = app;

