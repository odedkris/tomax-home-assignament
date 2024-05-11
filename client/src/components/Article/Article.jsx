import dateformat from 'dateformat';
import './article.css';
import arrow from '../../left_arrow.png';
import defaultImg from '../../article-default-img.png';


const Article = (props) => {
    const { title, publishedAt, author, description, content, urlToImage, url } = props.article;
    return (
        <div className='article-page'>
            <div className='return-btn'>
                <button onClick={props.onReturn}>
                    <img src={arrow} alt="" />
                </button>
            </div>
            <div className="article">
                <div className="article-header">
                    <div className='article-details'>
                        <h2 className="article-title">{title}</h2>
                        <time className="article-date">
                            {dateformat(publishedAt, 'dd/mm/yy HH:MM TT')}
                        </time>
                        <address class="author">By <a>{author}</a></address>
                        <div className="article-description">
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="article-media">
                        {urlToImage ? (
                            <img
                                title={title}
                                src={urlToImage}
                                alt={description ? description : ""}
                            />
                        ) : <img src={defaultImg} />}
                    </div>
                </div>


                <div className="article-content">
                    <p>{content}</p>
                    {url && <a href={url} target="_blank">Go to full article</a>}
                </div>
            </div>
        </div>
    );
}

export default Article