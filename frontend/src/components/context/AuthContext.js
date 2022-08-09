import {createContext, useState} from 'react'
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(() => sessionStorage.getItem("authTokens") ? jwtDecode(JSON.parse(sessionStorage.getItem("authTokens"))['access_token']) : null
    );
    const [authTokens, setAuthTokens] = useState(() => sessionStorage.getItem("authTokens") ? JSON.parse(sessionStorage.getItem("authTokens")) : null);

    const logout = () => {
        setAuthTokens(null);
        setUser(null);
        sessionStorage.removeItem("authTokens");
        navigate("/");
    }

    const login = (username, password) => {
        fetch("http://localhost:8080/api/user/login", {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams({
                "username": username,
                "password": password
            })
        })
            .then(r => r.json())
            .then(data => {
                setAuthTokens(data);
                const userData = jwtDecode(data['access_token']);
                setUser(userData);
                sessionStorage.setItem('authTokens', JSON.stringify(data));
                navigate("/reservation");
            })
    }

    const contextData = {
        authTokens: authTokens,
        user: user,
        setAuthTokens: setAuthTokens,
        setUser: setUser,
        login: login,
        logout: logout
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )


}