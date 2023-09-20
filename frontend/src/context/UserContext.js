import React,{useState,useContext} from "react";

const UserContext = React.createContext(null);

const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState({});

    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}

export const GetUserContext = () =>{
    return useContext(UserContext);
}

export default UserContextProvider;