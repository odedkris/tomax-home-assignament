const newsService = require("../services/newsService");

exports.getArticles = async (req, res, next) => {
  const category = req.params.category;
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 20;
  const query = req.query.query || '';
  try {
    const data = await newsService.getArticles(category, page, pageSize, query);
    res.status(200).json({articles: data.articles, totalResults: 38});
    
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};