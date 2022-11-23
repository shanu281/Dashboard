import { NavLink } from "react-router-dom";
import {
    useParams
} from "react-router-dom";
function Article(props) {
    let params = useParams();
    console.log(params)
    return (
        <>
            <NavLink to="/articles" className={({ isActive }) =>
                isActive ? "activeNav" : undefined
            }>  👈 Go back to articles
            </NavLink>

            <h2>The slug of the article is : {params.slug}  </h2>
        </>
    )
}
export default Article;