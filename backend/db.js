const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'spa_db',
  port: 3306
});

db.connect(err => {

  if (err) {
    console.log('Error conectando MySQL:', err);
    return;
  }

  console.log('Conectado a MySQL');

});

module.exports = db;

