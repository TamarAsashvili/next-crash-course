import ArticleItem from './ArticleItem'
import articleStyle from '../styles/Article.module.css'


const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyle.grid}>
            {articles.map((article, index) =>
            (
                <ArticleItem article={article} key={index} />
            )
            )}
        </div>
    )
}

export default ArticleList
