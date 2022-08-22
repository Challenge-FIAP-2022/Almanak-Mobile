import { createContext, useState } from "react";

// interface AuthData {
//     token: string;
//     email: string;
//     name: string;
// }

// interface AuthContextData {
//     authData : AuthData;
//     signIn: (email, password) => Promise;
//     signOut: ()=> Promise;
// }

export const AuthContext = createContext({});

export const AuthProvider = ({children}) =>{
    const [autData, setAuth] = useState();

    function signIn(){
        //chama API
    }

    function signOut(){
        //Logout
    }

    return(
        <AuthContext.Provider
        value={{authData, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}