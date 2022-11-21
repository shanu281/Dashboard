import react from "react";
import "./style.css"
function Home(props) {
    return (
        <>
            <div className="home-container">
                <h2>🚀 Welcome to Homepage!</h2>
                <div className="flex">
                    <div className="home-content"><a href=""><h2>ARTICLE PAGE</h2></a></div>
                    <div className="home-content"><a href=""><h2>BOOK PAGE</h2></a></div>
                    <div className="home-content"><a href=""><h2>PEOPLE PAGE</h2></a></div>
                </div>

            </div>

        </>
    )
}
export default Home;