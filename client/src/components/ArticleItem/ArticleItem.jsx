import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ArticleItem = (props) => {
  const article = props.article;
  const chooseArticleHandler = (event) => {
    event.preventDefault();
    props.onChooseArticle(event.target);
  };
  return (
    <div>
      {article.title}
    </div>
  );
};

export default ArticleItem;


    // <div
    //   className='item'
    //   key={article.title}
    //   onClick={() => chooseArticleHandler()}
    // >
    //   <div className='item-header'>
    //     <div className='header'>
    //       <a className='item-title'>{article.title}</a>
    //       <a className='item-date'>{new Date().toLocaleDateString()}</a>
    //       <div className='item-description'>{article.description}</div>
    //     </div>
    //     <div className='item-img'>
    //       {article.urlToImage ? (
    //         <img
    //           title={article.title}
    //           src={article.urlToImage}
    //           alt={article.description ? article.description : ''}
    //         />
    //       ) : null}
    //     </div>
    //   </div>
    // </div>