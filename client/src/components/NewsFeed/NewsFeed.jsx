import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import ArticleList from '../ArticlesList/ArticlesList';

const NewsFeed = () => {
  const [feedState, setFeedState] = useState({
    loadedArticles: [],
    chosenCategory: 'general',
    page: 1,
    searchInput: '',
    isLoading: false
  });

  const getArticles = useCallback(async (category, query, page) => {
    const url = `http://localhost:${process.env.SERVER_PORT || 8080}/news/${category}?page=${page}${
      query ? `?qeury=${query}` : ''} `;
    try {
      const response = await axios.get(url);
      if (!response.status === 200) {
        console.error(response);
      }
      const articles = response.data.articles
      setArticles([...articles]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getArticles(feedState.chosenCategory, feedState.query, feedState.page)
  }, [getArticles])


  const setArticles = (newArticles) => {
    setFeedState({ loadedArticles: newArticles });
  };

  const setChosenCategory = (category) => {
    setFeedState({ chosenCategory: category, searchInput: '', page: 0 });
  };

  const setSearchInput = (input) => {
    setFeedState({ searchInput: input, page: 0 });
  };

  const setPage = (page) => {
    setFeedState({ page: page });
  };

  const changeCategory = (category) => {
    setChosenCategory(category);
  };

  const changeSearchInput = (input) => {
    setSearchInput(input);
  };

  return (
    <div className='newsFeed'>
      <SearchBar
        onChangeSearchInput={changeSearchInput}
        value={feedState.searchInput}
      />
      <Categories onChangeCategory={changeCategory} />
      <ArticleList articles={feedState.loadedArticles} />
    </div>
  );
};

export default NewsFeed;
