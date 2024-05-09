const express = require("express");

const newsController = require("../controllers/newsController");

const router = express.Router();

router.get("/news/:category/", newsController.getArticles);

module.exports = router;