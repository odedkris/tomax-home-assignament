import ArticleItem from '../ArticleItem/ArticleItem';
import './newsFeed.css'


const NewsFeed = (props) => {

  return (
    <div className='main-feed'>
      {props.isLoading ? <div> Loading articles </div> :
        props.loadedArticles && props.loadedArticles.length ?
        props.loadedArticles.map(article => {
            return <ArticleItem article={article} onChooseArticle={props.onChooseArticle} />
          }) : <p><h1>No articles</h1></p>
      }
    </div>
  );
};

export default NewsFeed;
