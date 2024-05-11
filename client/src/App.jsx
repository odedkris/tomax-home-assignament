import { useCallback, useEffect, useState, } from 'react';
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar';
import Categories from './components/Categories/Categories';
import NewsFeed from './components/NewsFeed/NewsFeed';
import Article from './components/Article/Article';
import './App.css';

const App = () => {
  const [isChoosedArticle, setChoosedArticle] = useState(false);
  const [chosenArticle, setChosenArticle] = useState(null);
  const [loadedArticles, setLoadedArticles] = useState([]);
  const [chosenCategory, setChosenCategory] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const scrollHandler = (element) => {
    if (!isLoading) {
      const endOfPage = Math.abs(
        element.currentTarget.scrollHeight -
          element.currentTarget.scrollTop -
          element.currentTarget.offsetHeight
      );
      if (endOfPage <= 0.5) {
        if(hasMore) {
          setIsLoading(true);
          setPage((prevPage) => prevPage+1)
        }
      }
    }
  };

  const chooseArticleHandler = (article) => {
    setChosenArticle(article);
    setChoosedArticle(true);
  }

  const returnHandler = () => {
    setChosenArticle(null);
    setChoosedArticle(false);
  }

  const changeCategoryHandler = (category) => {
    if (category !== chosenCategory) {
      setChosenCategory(category);
      setSearchInput('');
      setPage(1);
      setIsLoading(true);
    }
  };

  const changeSearchInputHandler = (input) => {
    if (input !== searchInput) {
      setSearchInput(input);
      setPage(1);
      setIsLoading(true);
    }
  };

  const getArticles = useCallback(async (category, page, query) => {
    setIsLoading(true);
    
    const search = query && query !== '' ? `&q='${query}'` : ''; 
    const url = `http://localhost:${process.env.SERVER_PORT || 8080
      }/news/${category || 'general'}?page=${page}${search}`;
    try {
      const response = await axios.get(url);
      
      if (!response.status === 200) {
        console.error(response);
      }

      const articles = response.data.articles;
      const totalResults = response.data.totalResults
      setHasMore((currentPage) => {
        return currentPage*20 < totalResults 
      })

      if (page>1) {
        setLoadedArticles((prevArticles) => [...prevArticles,...articles])
      } else {
        setLoadedArticles(articles)
      }
      
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  });


  useEffect(() => {
    getArticles(chosenCategory,currentPage ,searchInput)
  }, [chosenCategory, searchInput, currentPage])


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
        {!isLoading && <NewsFeed onChooseArticle={chooseArticleHandler} articles={loadedArticles} onScroll={scrollHandler}
          chosenCategory={chosenCategory} searchInput={searchInput} currentPage={currentPage} isLoading={isLoading}
          setChosenCategory={setChosenCategory}
          setSearchInput={setSearchInput}
          setPage={setPage}
          setLoadedArticles={setLoadedArticles}
          setIsLoading={setIsLoading}
        />}
        {!chosenCategory || isLoading && <div className='message'>{isLoading ? 'Loading articles' : 'Choose Category'}</div>}
      </div>

    )
  }
};

export default App;


