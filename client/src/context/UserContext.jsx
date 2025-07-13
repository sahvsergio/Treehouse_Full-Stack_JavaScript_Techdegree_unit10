// imports
import { createContext, useState } from "react";
import { api } from "../apiHelper";

//content
const UserContext = createContext(null);

//provide component
export const UserProvider = (props) => {
  // states for user 
  const [authUser, setAuthUser] = useState(null);

  //Sign in action
  const signIn = async (credentials) => {
    try {
    //api call checking if user exists in database

      const response = await api("/users", "GET", null, credentials);

      //success case-->Authorized user
      if (response.status === 200) {
        const userData = await response.json();
        setAuthUser({ ...userData, password: credentials.password });
        // returns the user info
        return userData;
        // Failure case -->Not Authorized/Aut
      } else if (response.status === 401) {
        return null;
      }
    } catch (error) {
      //error handling 

      console.error('Sign in error:', error);
      return null;
    }
  }
  const signOut = () => {
    // sets authUser to null and logs the user out of the app
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
export default UserContext  ;