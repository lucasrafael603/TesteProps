import React, { createContext } from 'react'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    return (

        <AuthContext.Provider value={{name: 'Diego'}}>


              {children}


        </AuthContext.Provider>


    )
}

export {AuthContext, AuthProvider}