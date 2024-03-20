import {Link} from "react-router-dom";

//Navbar components
const Navbar=()=>{
    return(
        <>
        <nav class="navbar">
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/vehicles">Vehicles</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default Navbar;