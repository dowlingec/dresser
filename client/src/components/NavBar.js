import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        // <h1>HERE LIVES THE NAVBAR</h1>
        <span>
            <div className="nav-left">
            <NavLink to="/" exact>
            <i class="fa-solid fa-house-chimney"></i>
                {/* to style me see codealong module */}
            </NavLink>
            <NavLink to="/dresser" exact>
            <i class="fa-solid fa-shirt"></i>
            </NavLink>
            <NavLink to="/outfits" exact>
            <i class="fa-solid fa-user-tie"></i>
            </NavLink>
            </div>
            <div className="nav-right">
                <h1><i>DRESSER</i></h1>
            </div>
        </span>
    )
}

export default NavBar;