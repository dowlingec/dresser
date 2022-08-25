import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            
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
            <div className="nav-right">
            <img className="nav-logo" src="/logoSmall.png" style={{ height: `100%`, marginLeft: `-2%`}}></img>
                
            </div>
            
        </div>
    )
}

export default NavBar;