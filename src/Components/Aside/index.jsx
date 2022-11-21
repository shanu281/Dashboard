import react from "react";
import "./style.css"

class Aside extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <nav className="flex-1">

                    <l1><a href="#"><i class="fa-sharp fa-solid fa-house"></i>  Home</a> </l1>
                    <l1><a href=""><i class="fa-solid fa-a"></i>  Article</a> </l1>
                    <l1><a href=""><i class="fa-sharp fa-solid fa-user-group"></i>People</a></l1>
                    <l1><a href=""><i class="fa-sharp fa-solid fa-book"></i>Books</a></l1>
                    <l1><a href=""><i class="fa-solid fa-phone-volume"></i>Help & Support</a> </l1>
                </nav>
            </>
        )
    }
} export default Aside;