const axios = require('axios');

exports.getArticles = async (category, page, pageSize, query) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
    process.env.API_KEY
  }
  &category=${category}&page=${page}&pageSize=${pageSize}${
    query && query !== '' ? `&q=${query}` : ''
  }`;
  const response = await axios.get(url);
  if (!response.status === 200) {
    throw new Error('Faild fetching data')
  }
  if (!response.data.status === 'error') {
      throw new Error(response.data.message)
  }
  const articles = await response.data.articles;
  return articles;
};


