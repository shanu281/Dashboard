import react from "react";
import "./style.css"
import Aside from "../Aside";
import Header from "../Header";
import Hero from "../Hero";
import Articles from "../Articles";
import People from "../People";
import Books from "../Books";
import { BrowserRouter, Route ,Routes} from "react-router-dom";

class App extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: "",
            homePage: ""
        }
    }

   
    render() {
        return (
            <>
                <Header />
                <div className="main">
                    <div className="aside-section"> <Aside /></div>
                    <div className="hero-section">

                        {/* <Routes>
                            <Route path='/hero' >
                                <Hero />
                            </Route>

                            <Route path='/articles' >
                                <Articles />
                            </Route>

                            <Route path='/people'>
                                <People />
                            </Route>

                            <Route path='/books' >
                                <Books />
                            </Route>
                        </Routes> */}

                      


                    </div>
                </div>
            </>
        )
    }
} export default App