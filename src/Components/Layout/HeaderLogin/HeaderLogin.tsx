import { NavLink } from "react-router-dom";
import "./HeaderLogin.css";

function HeaderLogin(): JSX.Element {
    return (
        <div className="HeaderLogin">
			<NavLink to="/Register"><span> Don't have an account? Sign Up </span></NavLink>
        </div>
    );
}

export default HeaderLogin;
