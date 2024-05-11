import { useState, } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Categories from './components/Categories/Categories';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Article from './components/Article/Article';

const App = () => {
  const [isChoosedArticle, setChoosedArticle] = useState(false);
  const [chosenArticle, setChosenArticle] = useState(null);
  const [loadedArticles, setLoadedArticles] = useState([]);
  const [chosenCategory, setChosenCategory] = useState();
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true)

  const chooseArticleHandler = (article) => {
    setChosenArticle(article);
    setChoosedArticle(true);
  }

  const returnHandler = () => {
    setChosenArticle(null);
    setChoosedArticle(false);
  }

  const changeCategoryHandler = (category) => {
    setChosenCategory(category);
    setSearchInput('');
    setPage(1);
  };

  const changeSearchInputHandler = (input) => {
    setSearchInput(input);
    setPage(1);
  };

  const getArticles = async () => {
    const url = `http://localhost:${process.env.SERVER_PORT || 8080
      }/news/general?page=1`;
    try {
      const response = await axios.get(url);
      if (!response.status === 200) {
        console.error(response);
      }
      const articles = response.data;
      setLoadedArticles(articles)
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  if (isChoosedArticle) {
    return <Article article={chosenArticle} onReturn={returnHandler} />
  } else {
    return (
      <div className='news-feed'>
        <SearchBar
          onChangeSearchInput={changeSearchInputHandler}
          value={searchInput}
        />
        <Categories onChangeCategory={changeCategoryHandler} />
        {chosenCategory && <NewsFeed onChooseArticle={chooseArticleHandler} articles={loadedArticles}
          chosenCategory={chosenCategory} searchInput={searchInput} currentPage={currentPage} isLoading={isLoading}
          setChosenCategory={setChosenCategory}
          setSearchInput={setSearchInput}
          setPage={setPage}
          setLoadedArticles={setLoadedArticles}
          setIsLoading={setIsLoading}
        />}
        {!chosenCategory && <div className='message'>Choose category</div>}
      </div>

    )
  }
};

export default App;


