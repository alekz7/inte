require('dotenv').config();
const express = require('express');
const morgan  = require('morgan')
const app     = express();
const path    = require('path');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const { database } = require('./keys');

// configuracion
app.set('port',process.env.PORT || 3000);

// middleware
app.use(session({
  secret:'alekzintelimetrica',
  resave:false,
  saveUninitialized:false,
  store: new MySQLStore(database)
}))
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// frontend
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use((req,res,next)=>{
  next();
})

// routes
const index = require('./routes/index');
app.use("/",index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const crudRoutes = require('./routes/crud');
app.use('/crud', crudRoutes);

const statisticsRoutes = require('./routes/statistics');
app.use('/restaurants', statisticsRoutes);

// inicializando servidor
app.listen(app.get('port'),()=>{
  console.log("Servidor en el puerto",app.get('port'));
})
module.exports = app;