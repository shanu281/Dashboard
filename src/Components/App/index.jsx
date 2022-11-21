import react from "react";
import Aside from "../Aside";
import Header from "../Header";
import Hero from "../Hero";
import Articles from "../Articles";
import People from "../People";
import Books from "../Books";

class App extends react.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Header/>
            <Hero/>
            <Aside/>
            <Articles/>
            <People/>
            <Books/>
            </>
        )
    }
}export default App