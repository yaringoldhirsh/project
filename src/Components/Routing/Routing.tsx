import { Route, Routes } from "react-router-dom";
import SigninSide from "../SigninSide/SigninSide";
import SignUpSide from "../signUpSide/signUpSide";



function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/login" element={<SigninSide/>}/>
                <Route path="/Register" element={<SignUpSide/>}/>
                <Route path="*" element={<SigninSide/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
