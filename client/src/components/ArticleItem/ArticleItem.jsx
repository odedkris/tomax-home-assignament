import * as React from 'react';
import dateformat from 'dateformat';
import './articleItem.css'
import defaultImg from '../../article-default-img.png'

const ArticleItem = (props) => {
  const article = props.article;
  const articleDescription = article.description && article.description.length > 80 ? 
  article.description.slice(0, 80) + '...' : article.description
 
  return (
    <div className='article-item'
      key={article.title}
      onClick={() => props.onChooseArticle(article)}>
      <div className='item-media'>
        {article.urlToImage ? (
          <img
            title={article.title}
            src={article.urlToImage}
            alt={article.description ? article.description : ""}
          />
        ) :<img
        src={defaultImg}
        />}
      </div>
      <div className="item-content">
        <div className="article-title">{article.title}</div>
        <time className="article-date">
          {dateformat(article.publishedAt, 'dd/mm/yy HH:MM TT')}
        </time>
        <div className="article-description">
          {articleDescription}
        </div>
      </div>
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