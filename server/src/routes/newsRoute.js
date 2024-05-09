const express = require("express");

const newsController = require("../controllers/newsController");

const router = express.Router();

router.get("/news/:catergory/:search?", newsController.getArticles);

module.exports = router;