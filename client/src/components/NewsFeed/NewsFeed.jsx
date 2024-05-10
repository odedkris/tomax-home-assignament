import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import Categories from '../Categories/Categories';
import ArticleItem from '../ArticleItem/ArticleItem';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const NewsFeed = (props) => {
  const [loadedArticles, setLoadedArticles] = useState([]);
  const [chosenCategory, setChosenCategory] = useState('general');
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsloading] = useState(true)


  useEffect(() => {
    const getArticles = async (category, query, page) => {
      const url = `http://localhost:${process.env.SERVER_PORT || 8080
        }/news/${category}?page=${page}${query ? `?qeury=${query}` : ''} `;
      try {
        const response = await axios.get(url);
        if (!response.status === 200) {
          console.error(response);
        }
        const articles = response.data;
        setLoadedArticles(articles);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles(chosenCategory, searchInput, page);
  }, []);

  const changeCategoryHandler = (category) => {
    setChosenCategory(category);
    setSearchInput('');
    setPage(1);
  };

  const changeSearchInputHandler = (input) => {
    setSearchInput(input);
    setPage(1);
  };

  return (
    <div className='news-feed'>
      <SearchBar
        onChangeSearchInput={changeSearchInputHandler}
        value={searchInput}
      />
      <Categories onChangeCategory={changeCategoryHandler} />
      {/* <Box sx={{ width: '90%' }}>
        <Stack spacing={2}>
          {isLoading ? <div> Loading articles </div> :
            loadedArticles && loadedArticles.length ?
              loadedArticles.map(article => {
                return <ArticleItem article={article} onChooseArticle={props.onChooseArticle} />
              }) : <p><h1>No articles</h1></p>
          }
        </Stack>
      </Box> */}
    </div >
  );
};

export default NewsFeed;
