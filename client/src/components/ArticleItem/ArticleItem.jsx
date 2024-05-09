const ArticleItem = (article) => {
    console.log(article.article)
    return (
        <div className='article' >
            <p>{article.article.title}</p>
        </div>
    )
}

export default ArticleItem