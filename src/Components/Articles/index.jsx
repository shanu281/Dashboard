import react from "react";
import "./style.css"
import articles from "../Data/Data";
import { NavLink } from "react-router-dom";
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
                    articles.map((article, i) =>
                        <div className="article-container">
                            <NavLink to="/articles/i" className={({ isActive }) =>
                                isActive ? "activeNav" : undefined
                            }>  {article.title}
                            </NavLink>
                            <p className="author">{article.author}</p>
                           
                           
                        </div>

                    )

                }
            </>
        )
    }
} export default Articles