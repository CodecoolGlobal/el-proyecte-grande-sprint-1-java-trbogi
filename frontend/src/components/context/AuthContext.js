import {createContext, useState, useEffect} from 'react'
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

    const contextData = {
        authTokens: authTokens,
        user: user,
        setAuthTokens: setAuthTokens,
        setUser: setUser,
        logout: logout
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )


}