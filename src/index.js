const express = require('express');
const morgan  = require('morgan')
const app     = express();
const path    = require('path');

// configuracion
app.set('port',process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));

// frontend
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(require("./routes/index"))

// inicializando servidor
app.listen(app.get('port'),()=>{
  console.log("Servidor en el puerto",app.get('port'));
})