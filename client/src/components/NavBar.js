import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <span className="navbar">
            {/* <div className="nav-right"> */}
            {/* <p><i>DRESSER</i></p> */}
            {/* </div> */}
            {/* <div className="nav-left"> */}
                <NavLink to="/" exact>
                    <i class="fa-solid fa-house-chimney fa-4x"></i>
                    {/* to style me see codealong module */}
                </NavLink>
                <NavLink to="/dresser" exact>
                    <i class="fa-solid fa-shirt fa-4x"></i>
                </NavLink>
                <NavLink to="/outfits" exact>
                    <i class="fa-solid fa-user-tie fa-4x"></i>
                </NavLink>
                {/* MUTE ME SOON */}
                <button onClick={(() => {
                    let req = fetch('/cookie_click')
                    // let res = await req.json()
                    // console.log
                })}> COOKIE TEST</button>
            {/* </div> */}
        </span>
    )
}

export default NavBar;