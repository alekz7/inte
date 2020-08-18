const express = require('express');
const router = express.Router();

const pool = require("../database");
const table = process.env.TABLE_RESTAURANTS;

// OK, devuelve un arreglo con objetos de la base de datos
router.get('/', async (req,res)=>{
  const restaurantes = await pool.query(`SELECT * FROM ${table}`);
  res.status(200);
  res.json(restaurantes);
})

// OK agregando informacion a la base de datos, se deja la creacion del restaurante para agregar en un futuro el id del usuario y realizar estadisticos
router.post('/add', async (req,res)=>{
  const { id, rating, name, site, email, phone, street, city, state, lat, lng } = req.body;
  const newRestaurant = { id, rating, name, site, email, phone, street, city, state, lat, lng }  
  let result = await pool.query(`INSERT INTO ${table} set ?`,[newRestaurant]);
  res.status(200);
  res.json(result);
})

// OK se elimina un registro de la base de datos
router.get('/delete/:id', async (req,res)=>{  
  console.log(req.params.id);
  const { id } = req.params;
  const result = await pool.query(`DELETE FROM ${table} WHERE ${table}.id = ?`,[id]);  
  res.status(200);
  res.json(result);
})

// OK, obtiene informacion de un solo registro y lo devuelve con fines de realizar alguna edicion
router.get('/edit/:id', async (req,res)=>{    
  const { id } = req.params;
  const restaurant = await pool.query(`SELECT * FROM ${table} WHERE ${table}.id = ?`,[id]);  
  res.status(200);
  res.json(restaurant);
})

// OK, actualiza informacion del id que se proporciona en los parametros
router.post('/edit/:id', async (req,res)=>{  
  const { id } = req.params;  
  const { rating, name, site, email, phone, street, city, state, lat, lng } = req.body;
  const newRestaurant = { id, rating, name, site, email, phone, street, city, state, lat, lng }  
  let result = await pool.query(`UPDATE ${table} set ? WHERE ${table}.id = ?`,[newRestaurant,id]);
  res.status(200);
  res.json(result);
})

module.exports = router;