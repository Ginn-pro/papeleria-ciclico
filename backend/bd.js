require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,          // localhost
  user: process.env.DB_USER,          // root
  password: process.env.DB_PASSWORD,  // Hola-mundo26
  database: process.env.DB_NAME       // papelera_ciclico_prueba_1
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión a MySQL exitosa!');
});

module.exports = connection;