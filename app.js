const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 4200);