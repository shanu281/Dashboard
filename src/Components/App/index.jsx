import react from "react";
import "./style.css"
import Aside from "../Aside";
import Header from "../Header";
import Home from "../Home"
import Articles from "../Articles";
import People from "../People";
import Books from "../Books";
import Help from "../Help";
import Article from "../Article";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends react.Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <>
                <Header />
                <div className="main">
                    <div className="aside-section"> <Aside /></div>
                    <div className="hero-section">

                        <Routes>
                            <Route
                                element={<Home />}
                                path="/home"
                            />,

                            <Route
                                element={<Articles />}
                                path="/articles"
                                exact
                            />,
                            
                             <Route
                                element={<Article/> }
                                path="/articles/:slug"
                            
                               
                            />,

                            <Route
                                element={<People />}
                                path="/people"
                            />,

                            <Route
                                element={<Books />}
                                path="/books"
                            />

                            <Route
                                element={<Help />}
                                path="/Help"
                            />

                            <Route
                                element={<Home />}
                                path="/ "
                            />

                        </Routes>






                    </div>
                </div>
            </>
        )
    }
} export default App