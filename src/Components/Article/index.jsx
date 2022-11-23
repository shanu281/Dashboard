import { NavLink } from "react-router-dom";

function Article(props) {

    
    return (
        <>
            <NavLink to="/articles" className={({ isActive }) =>
                isActive ? "activeNav" : undefined
            }>  👈 Go back to articles
            </NavLink>

            <h2>The slug of the article is :  </h2>
        </>
    )
}
export default Article;