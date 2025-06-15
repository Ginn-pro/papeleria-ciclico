const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();


// AÑADE ESTAS LÍNEAS PARA DEBUGGEAR
console.log('DEBUG: DB_HOST:', process.env.DB_HOST);
console.log('DEBUG: DB_USER:', process.env.DB_USER);
console.log('DEBUG: DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DEBUG: DB_NAME:', process.env.DB_NAME);
// FIN DE LÍNEAS DE DEBUG

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint para obtener productos
app.get('/api/productos', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));