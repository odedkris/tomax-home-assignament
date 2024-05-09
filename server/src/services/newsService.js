const axios = require("axios");

exports.getArticles = async (currentPage, itemsPerPage, category, search) => {
  try {
    const response = await axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}${
          search ? `&q=${search}` : ""
        }pageSize=${itemsPerPage}&page${currentPage}=&apiKey=${
          process.env.API_KEY
        }`
      )
      if (!response.ok) {
        console.log(response)
        throw new Error()
      } 

    const articles = await response.json();
    return articles;
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    throw error;
  }
};