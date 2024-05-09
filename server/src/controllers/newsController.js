const newsService = require("../services/newsService");

exports.getArticles = (req, res, next) => {
  const currentPage = req.query.page || 1;
  const itemsPerPage = req.query.itemsPerPage || 20;
  const catergory = req.params.catergory;
  const search = req.params.search;
  try {
    const articles = newsService.getArticles(
      currentPage,
      itemsPerPage,
      catergory,
      search,
    );
    res.status(200).json({
      message: "News fetched",
      articles: articles,
      totalItams: tickets.length,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};