const express = require('express');
const router = express.Router();
const db = require('./db');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

module.exports = connection;

// =====================================
// GUARDAR RESERVA
// =====================================

router.post('/reservar', (req, res) => {

  try {

    console.log('Datos recibidos:', req.body);

    // =========================
    // DATOS DEL CLIENTE
    // =========================

    const {
      nombre,
      email,
      fecha,
      hora,
      servicio
    } = req.body;

    // =========================
    // VALIDAR CAMPOS
    // =========================

    if (
      !nombre ||
      !email ||
      !fecha ||
      !hora ||
      !servicio
    ) {

      return res.status(400).json({
        success: false,
        mensaje: 'Todos los campos son obligatorios'
      });

    }

    // =========================
    // INSERTAR EN MYSQL
    // =========================

    const sql = `
      INSERT INTO reservas
      (
        nombre,
        email,
        fecha,
        hora,
        servicio
      )
      VALUES (?, ?, ?, ?, ?)
    `;

    const valores = [
      nombre,
      email,
      fecha,
      hora,
      servicio
    ];

    db.query(sql, valores, (err, result) => {

      // =========================
      // ERROR MYSQL
      // =========================

      if (err) {

        console.error('Error MySQL:', err);

        return res.status(500).json({
          success: false,
          mensaje: 'Error al guardar la reserva'
        });

      }

      // =========================
      // RESPUESTA EXITOSA
      // =========================

      res.status(200).json({
        success: true,
        mensaje: 'Reserva guardada correctamente',
        reservaId: result.insertId
      });

    });

  } catch (error) {

    console.error('Error servidor:', error);

    res.status(500).json({
      success: false,
      mensaje: 'Error interno del servidor'
    });

  }

});

// =====================================
// OBTENER TODAS LAS RESERVAS
// =====================================

router.get('/reservas', (req, res) => {

  const sql = `
    SELECT *
    FROM reservas
    ORDER BY id DESC
  `;

  db.query(sql, (err, result) => {

    if (err) {

      console.error('Error MySQL:', err);

      return res.status(500).json({
        success: false,
        mensaje: 'Error al obtener reservas'
      });

    }

    res.status(200).json(result);

  });

});

// =====================================
// EXPORTAR ROUTER
// =====================================

module.exports = router;



