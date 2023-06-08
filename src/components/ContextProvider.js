import React, { useState } from "react";


export const Context = React.createContext({
    inboxNo:"0",
    setinboxNo:()=>{},
    isLoggedIn:false,
    token: null,
    setToken: ()=>{}
})


const ContextProvider = (props) =>{
    const initialtoken = localStorage.getItem("Token")
    const [inboxNo,setinboxNo] = useState(0)
    const [token,setToken] = useState(initialtoken)

    const setTokenhandler = (token) =>{
        setToken(token)
    }
    
    const setInboxNohandler = (no) =>{
        setinboxNo(no)
    }

    const value = {
        inboxNo:inboxNo,
        setinboxNo:setInboxNohandler,
        setToken:setTokenhandler,
        token: token,
        isLoggedIn: !!token
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider

