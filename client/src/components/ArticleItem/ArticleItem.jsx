const ArticleItem = (props) => {
  const article = props.article;
  const choseArticleHandler = (event) => {
    event.preventDefault();
    props.onChooseArticle(event.target);
  };
  return (
    <div
      className='article-item'
      key={article.title}
      onClick={() => choseArticleHandler()}
    >
      <div className='article-item-header'>
        <div className='article-header'>
          <a className='article-item-title'>{article.title}</a>
          <a className='article-item-date'>{new Date().toLocaleDateString()}</a>
          <div className='news-item-description'>{article.description}</div>
        </div>
        <div className='news-item-image'>
          {article.urlToImage ? (
            <img
              title={article.title}
              src={article.urlToImage}
              alt={article.description ? article.description : ''}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
