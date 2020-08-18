const express = require('express');
const router = express.Router();

const pool = require("../database");
const table = process.env.TABLE_RESTAURANTS;

function getStandardDeviation (array) {  
  const n = array.length
  if (n == 0) return 0;
  const mean = array.reduce((a, b) => a + b) / n
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

function getAverageRating(array){
  const n = array.length
  if (n == 0) return 0;
  const mean = array.reduce((a, b) => a + b) / n
  return mean;
}

router.get('/:statistics', async(req,res)=>{

  // console.log("req.params.statistics",req.params.statistics); //statistics
  // console.log("req.query",req.query); // req.query { latitude: '9', longitude: '8', radius: '7' }
  // console.log("req.params",req.params); // req.params { statistics: 'statistics' }  

  const { latitude, longitude, radius } = req.query;  
  // let result = await pool.query(`UPDATE  set ? WHERE ${table}.id = ?`,[newRestaurant,id]);  

  let result = await pool.query(`SELECT * FROM ${table} WHERE st_distance(point(lng, lat), point(${latitude}, ${longitude})) <= ${radius}`);

  let objResponse = {
    count:result.length,
    avg:  getAverageRating(result.map((elem)=>{return elem.rating})),
    std:  getStandardDeviation(result.map((elem)=>{return elem.rating})),
  }
  console.log(objResponse);
  res.status(200);
  res.json(result);

})

module.exports = router;