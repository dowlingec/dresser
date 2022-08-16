import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <span className="navbar">
            <div className="nav-right">
                <img src="/logoSmall.png" style={{ height: `100%`, marginLeft: `-2%`}}></img>
            </div>
            <div className="nav-left">
                
                <NavLink activeClassName="active" to="/" exact>
                    <i class="fa-solid fa-house-chimney fa-4x"></i>
                    {/* to style me see codealong module */}
                </NavLink>
                <NavLink activeClassName="active" to="/dresser" exact>
                    <i class="fa-solid fa-shirt fa-4x"></i>
                </NavLink>
                <NavLink activeClassName="active" to="/outfits" exact>
                    <i class="fa-solid fa-user-tie fa-4x"></i>
                </NavLink>
            </div>
        </span>
    )
}

export default NavBar;