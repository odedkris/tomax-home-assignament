import { useState } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Article from './components/Article/Article';

const App = () => {
  const [isChoosedArticle, setChoosedArticle] = useState(false);
  const [chosenArticle, setChosenArticle] = useState(null);

  const chooseArticleHandler = (article) => {
    setChosenArticle(article);
    setChoosedArticle(true);
  }

  if (isChoosedArticle) {
    return <Article article={chosenArticle}/>
  } else{
    return <NewsFeed onChooseArticle={chooseArticleHandler}/>
  }
};

export default App;


