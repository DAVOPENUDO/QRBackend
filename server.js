const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BD_ListQR'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { matricula, nombre, correo, telefono } = req.body;
  const query = 'INSERT INTO usuarios (matricula, nombre, correo, telefono) VALUES (?, ?, ?, ?)';
  db.query(query, [matricula, nombre, correo, telefono], (err, result) => {
    if (err) {
      res.status(500).send('Error al registrar usuario');
    } else {
      res.status(200).send('Usuario registrado con éxito');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
