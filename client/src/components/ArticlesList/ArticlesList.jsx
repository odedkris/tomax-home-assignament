import ArticleItem from '../ArticleItem/ArticleItem';

const ArticlesList = (articles) => {
  if (articles.length) {
    return (
      <div className='newsFeed'>
        <ul>
          {articles.map((article) => (
            <ArticleItem title={article.title} />
          ))}
        </ul>
      </div>
    );
  } else {
    return <div className='newsFeed'>no articles</div>;
  }
};

export default ArticlesList;
