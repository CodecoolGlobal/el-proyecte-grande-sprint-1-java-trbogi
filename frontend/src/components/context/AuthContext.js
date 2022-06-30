import {createContext, useState, useEffect} from 'react'

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    return(
        <AuthContext.Provider value={[authTokens, setAuthTokens, user, setUser, userId, setUserId]}>
            {children}
        </AuthContext.Provider>
    )


}