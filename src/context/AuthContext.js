import {createContext, useState} from 'react'
import { useHistory } from "react-router-dom";


const AuthContext = createContext();
export const AuthProvider = (props) => {

    const history = useHistory();


    const [user, setUser] = useState(null);

    const loginUser = async (email) => {
        setUser({email});
        history.push('/');

    }
    /**
     * Adds email to user
     * @param {string} email
     */
    const logoutUser = async () => {
        setUser(null);
        history.push('/');
    }
    /**
     * Sets user to null
     * 
     */

    return (
        <AuthContext.Provider value={{user, loginUser, logoutUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;