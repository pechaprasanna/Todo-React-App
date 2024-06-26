import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    function login(username, password) {
        if(username === 'Prasanna' && password === 'hello') {
            setAuthenticated(true)
            setUsername(username)
            return true 
        } else {
            setAuthenticated(false)
            return false
        }

    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, login, logout, username }}>
            {children}
        </AuthContext.Provider>
    )
}