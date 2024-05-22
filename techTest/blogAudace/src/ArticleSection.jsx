import './articleSection.css'
import Article from './Article'

export default function ArticleSection({ article_list }) {
    return (
        <>
        <section class="articles">
            {article_list.map((article, index) => (
                <Article key={index} 
                img_url={article.img_url} 
                article_title={article.article_title}
                article_brief={article.article_brief}
                link_to_article={article.link_to_article} />
            ))}
        </section>
        </>
    )
}