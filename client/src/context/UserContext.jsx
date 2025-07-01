import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext(null);
import { api } from "../apiHelper";




export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const signIn = async (credentials) => {

    let response = await api("/users", "GET", null, credentials);

    response.then((responseData) => {

      if (responseData) {

        if (responseData.status === 200) {
          let user = responseData.json();
          user.then((userData) => {
            setAuthUser(userData);
            return userData.json();
          });
        } else if (responseData.status === 401) {
          return null;
        }
    }});

  }


return (
  <UserContext.Provider value={{
    authUser,
    actions: {
      signIn
    }
  }}>
    {props.children}
  </UserContext.Provider>
)
}
export default UserContext  
