import { useState } from 'react';
import axios from 'axios';
import './App.css';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Article from './components/Article/Article';

const App = () => {
  const [isChoosedArticle, setChoosedArticle] = useState(false);
  const [chosenArticle, setChosenArticle] = useState(null);

  if (isChoosedArticle) {
    return <Article article={chosenArticle}/>
  } else{
    return <NewsFeed />
  }
};

export default App;



  // const getArticles = async (category, query, page) => {
  //   const url = `http://localhost:${process.env.SERVER_PORT || 8080}/news/${category}?page=${page}${
  //     query ? `?qeury=${query}` : ''} `;
  //   try {
  //     const response = axios.get(url);
  //     if (!response.status === 200) {
  //       console.error(response);
  //     }
  //     const articles = response.data.articles
  //     setArticles(articles);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
