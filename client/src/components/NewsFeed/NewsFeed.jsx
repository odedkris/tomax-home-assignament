import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import ArticleList from '../ArticlesList/ArticlesList';

const NewsFeed = () => {
  const [feedState, setFeedState] = useState({
    loadedArticles: [],
    chosenCategory: 'general',
    page: 0,
    searchInput: '',
  });

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
