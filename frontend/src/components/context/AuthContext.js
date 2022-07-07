import {createContext, useState} from 'react'
import jwtDecode from "jwt-decode";

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwtDecode(JSON.parse(localStorage.getItem("authTokens"))['access_token']) : null
    );
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);

    const logout = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
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
                localStorage.setItem('authTokens', JSON.stringify(data))
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