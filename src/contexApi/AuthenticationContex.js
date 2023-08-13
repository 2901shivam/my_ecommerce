import React, { createContext, useState } from "react";

const myAuthentication = createContext();

const AuthenticationContex = (props) => {
  const intialToken=localStorage.getItem('token');
  const [token, setToken] = useState(intialToken);

  let userIsLogedin = false;

  if (token) {
    userIsLogedin = true;
  }

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  const loginHandler = (token,email) => {
    setToken(token);
    localStorage.setItem('token',token);
    localStorage.setItem('email',email);
  };

  
  

  return (
    <myAuthentication.Provider
      value={{ token, userIsLogedin, loginHandler, logoutHandler }}
    >
      {props.children}
    </myAuthentication.Provider>
  );
};

export { AuthenticationContex, myAuthentication };
