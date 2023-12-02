const pool = require("./config");
const express = require("express");
const router = express.Router();

// get all film
router.get("/films", (req, res) => {
  const query = `SELECT * from film`;

  pool.query(query, (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows);
  });
});

// get film by id
router.get("/films/:id", (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM film WHERE film_id = $1`;

  pool.query(query, [id], (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows[0]);
  });
});

// get all category
router.get("/category", (req, res) => {
  const query = `SELECT * from category`;

  pool.query(query, (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows);
  });
});

// get film by category
router.get("/films/category/:category_id", (req, res) => {
  const { category_id } = req.params;

  const query = `SELECT f.*, c.name FROM film f
                   JOIN film_category fc on f.film_id = fc.film_id
                   JOIN category c ON fc.category_id = c.category_id
                   WHERE c.category_id = $1`;
  pool.query(query, [category_id], (err, result) => {
    if (err) throw err;

    res.status(200).json(result.rows);
  });
});

module.exports = router;
