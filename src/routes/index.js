const express = require("express");
const router = express.Router();
const getPopMovies = require("./getPopMovies.js");

router.get("/", getPopMovies.get);

module.exports = router;
