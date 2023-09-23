import React, { useState, useContext, useEffect } from "react";
import { getCurrentUser, getAccount } from "../utils/apiHelper";

const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({isLoggedIn:false});

  useEffect(() => {
    const func = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const user = await getCurrentUser();
        setUser({...user.data,isLoggedIn:true});
      }
    };
    func();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const GetUserContext = () => {
  return useContext(UserContext);
};

export default UserContextProvider;
