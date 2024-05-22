

export default function Article({
    key, 
    img_url = "https://picsum.photos/id/1011/800/450", 
    article_title = "A title", 
    article_brief = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta facilis accusamus, ea animi quis saepe? Ratione, quas ducimus iste praesentium necessitatibus expedita rem a quasi rerum deleniti, at, quae sapiente dolores. Labore non aliquid ipsam, recusandae sapiente eveniet laborum ullam officia accusamus culpa facere, reprehenderit nesciunt doloribus praesentium incidunt!", 
    link_to_article = "#"}) {
return (
    <article key={key}>
                <div class="article-wrapper">
                    <figure>
                        <img src={img_url} alt="" />
                    </figure>
                <div class="article-body">
                <h2>{article_title}</h2>
                <p>{article_brief}</p>
                <a href={link_to_article} class="read-more">
                    Read more  <span class="sr-only"> about it </span>
                </a>
            </div>
        </div>
    </article>
)

}
