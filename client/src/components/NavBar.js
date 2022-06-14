import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        // <h1>HERE LIVES THE NAVBAR</h1>
        <div>
            <div className="nav-left">
            <NavLink to="/" exact>
                About
                {/* to style me see codealong module */}
            </NavLink>
            <NavLink to="/dresser" exact>
                My Dresser
            </NavLink>
            <NavLink to="/outfits" exact>
                My Outfits
            </NavLink>
            </div>
            <div className="nav-right">
                <h1><i>DRESSER</i></h1>
            </div>
        </div>
    )
}

export default NavBar;