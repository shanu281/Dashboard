import react from "react";
import "./style.css";
import articles from "../Data/Data";
import { NavLink } from "react-router-dom";
import HOC from "../Search/Search";
function Articles(props) {
  let filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(props.searchedArticle)
  );
  console.log(filteredArticles);
  return (
    <>
      <input
        onChange={props.handleArticleSearch}
        value={props.searchedArticle}
        type="search"
        placeholder="Search.."
      />

      {filteredArticles.map((article) => (
        <div className="article-container" key={article.slug}>
          <NavLink
            to={`/articles/${article.slug}`}
            className={({ isActive }) => (isActive ? "activeNav" : undefined)}
          >
            {" "}
            {article.title}
          </NavLink>
          <p className="author">{article.author}</p>
        </div>
      ))}
    </>
  );
}
export default HOC(Articles);
