import articleStyle from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
    return (
        <div clssName={articleStyle.grid}>
            {articles.map((article) =>
            (
                <h3>{article.title}</h3>
            )
            )}
        </div>
    )
}

export default ArticleList
