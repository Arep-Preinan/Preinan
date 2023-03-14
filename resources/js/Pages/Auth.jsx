import { useState } from "react";
import Login from "@/Components/Login";
import Register from "@/Components/Register";

const Auth = (props) => {
    const [mode, setMode] = useState('login');

    const handleMode = (mode) => {
        setMode(mode);
    }

    return(
        <>
            {
                mode === 'login' ? <Login props={props} handleMode={handleMode} /> : <Register handleMode={handleMode} />
            }
        </>
    )
}

export default Auth;