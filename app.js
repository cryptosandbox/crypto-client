const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 4200, () => {
  console.log(`running at ${process.env.HOST}:${process.env.PORT}`);
  console.log(`running in ${process.env.NODE_ENV} mode`);
})