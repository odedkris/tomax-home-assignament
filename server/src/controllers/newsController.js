const newsService = require("../services/newsService");

exports.getArticles = async (req, res, next) => {
  const category = req.params.category;
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 20;
  const query = req.query.query || '';
  try {
    const articles = await newsService.getArticles(category, page, pageSize, query);
    res.status(200).json(articles);
    
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};