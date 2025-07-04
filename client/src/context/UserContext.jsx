import { createContext, useState } from "react";
import { api } from "../apiHelper";

const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);

  const signIn = async (credentials) => {
    try {
      const response = await api("/users", "GET", null, credentials);

      if (response.status === 200) {
        const userData = await response.json();
        setAuthUser({...userData,password:credentials.password});
        return userData;
      } else if (response.status === 401) {
        return null;
      }
    } catch (error) {
      console.error('Sign in error:', error);
      return null;
    }
  }
  const signOut =  () => {
    setAuthUser(null);
    
  }

  const contextValue = {
    authUser,
    actions: {
      signIn,
      signOut
    }
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  )
}
export default UserContext  