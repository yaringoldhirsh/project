import { NavLink } from "react-router-dom";
import "./HeaderRegister.css";

function HeaderRegister(): JSX.Element {
    return (
        <div className="HeaderRegister">
			  <NavLink to="/Login"><span>Already have an account? Sign in</span></NavLink>
        </div>
    );
}

export default HeaderRegister;
