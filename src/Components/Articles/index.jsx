import react from "react";
import "./style.css"
import articles from "../Data/Data";
import { NavLink } from "react-router-dom";
class Articles extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue : ""
        }
    }
   
handleSearch = ({ target: { value } }) => {
    this.setState({ searchValue: value });
  
    }
    render() {
        let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchValue)
    );
        console.log(filteredArticles)
        return (
            <>
                <input 
                onChange={this.handleSearch}
                value={this.state.searchValue} 
                type="search" 
                placeholder="Search.." />

                {
                    filteredArticles.map((article) =>
                        <div className="article-container" key={article.slug}>
                            <NavLink to={`/articles/${article.slug}`} className={({ isActive }) =>
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