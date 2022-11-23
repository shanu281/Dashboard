import react from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

class Aside extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div className="flex-1">
                    <NavLink to="/home" className={({ isActive }) =>
                        isActive ? "activeNav" : undefined
                    }><li className="li-2">Home</li></NavLink>
                   
                    <NavLink to="/articles" className={({ isActive }) =>
                        isActive ? "activeNav" : undefined
                    } ><li  className="li-2">Articles</li></NavLink>
                   
                    <NavLink to="/people" className={({ isActive }) =>
                        isActive ? "activeNav" : undefined
                    } ><li className="li-2">People</li></NavLink>
                  
                    <NavLink to="/books" className={({ isActive }) =>
                        isActive ? "activeNav" : undefined
                    }><li className="li-2">Books</li></NavLink>
                   
                    <NavLink to="/help" className={({ isActive }) =>
                        isActive ? "activeNav" : undefined
                    } ><li className="li-2">Help</li></NavLink>

                </div>
            </>
        )
    }
} export default Aside;