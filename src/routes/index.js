const express = require("express");
const router = express.Router();
const getPopMovies = require("./getPopMovies.js");
const register = require("./register");

router.get("/", getPopMovies.get);
router.post("/register", register.post);
module.exports = router;
