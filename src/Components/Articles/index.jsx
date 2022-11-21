import react from "react";
import "./style.css"
import articles from "../Data/Data";
class Articles extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(articles)
        return (
            <>
                <input type="search" placeholder="Search.." />

                {
                    articles.map(article =>
                        <div className="article-container">
                            <h2>{article.title}</h2>
                            <p className="author">{article.author}</p>
                        </div>

                    )

                }
            </>
        )
    }
} export default Articles