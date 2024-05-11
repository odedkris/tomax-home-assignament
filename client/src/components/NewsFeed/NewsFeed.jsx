import { useState, React } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';
import './newsFeed.css'

const NewsFeed = (props) => {

  return (
    <div className='main-feed' onScroll={props.onScroll}>
      {props.articles && props.articles.length ?
        props.articles.map(article => {
          return (<ArticleItem article={article} onChooseArticle={props.onChooseArticle} />)
        })       
        :
        <p><h1>No articles found</h1></p>}
        {!props.hasMore && <div>No more articles found </div>}
    </div>
  );
};

export default NewsFeed;
