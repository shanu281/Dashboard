import react from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
function Home(props) {
    return (
        <>
            <div className="home-container">
                <h2>🚀 Welcome to Homepage!</h2>
                <div className="flex">
                    <div className="home-content"><NavLink to ="/articles"><h2>ARTICLE PAGE</h2></NavLink></div>
                    <div className="home-content"><NavLink to ="/books"><h2>BOOK PAGE</h2></NavLink></div>
                    <div className="home-content"><NavLink to ="/people"><h2>PEOPLE PAGE</h2></NavLink></div>
                </div>

            </div>

        </>
    )
}
export default Home;