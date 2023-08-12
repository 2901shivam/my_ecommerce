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
  };

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token);
    const timer= setTimeout(logoutHandler,50000);
    return(()=>{
      clearInterval(timer);
    })
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
