import { useState, useEffect } from 'react';
import axios from 'axios';
import Article from '../Article/Article';

const NewsFeed = (props) => {
  const [articles, setArticles] = useState([]);
  const [category, searchTerm] = { props };

  useEffect(() => {
    const getArticles = async () => {
      const url = `http/localhost:${process.env.PORT || 8080}/news/${category}${
        searchTerm ? searchTerm : ''
      }`;
      try {
        const response = axios.get(url);
        if (!response.ok) {
          console.error(response);
        }
        const articles = await response.json();
        setArticles(articles);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles(category, searchTerm);
  }, [category, searchTerm]);

  return (
    <div className='newsFeed'>
      <ul>
        {articles.map((index, article) => (
          <li key={article.title + `${index}`}>
            <Article title={article.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed; 