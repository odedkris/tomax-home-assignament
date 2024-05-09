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


