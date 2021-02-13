import { useState, useEffect } from "react";
import Context from "./Context";

export default function PageContextProvider(props) {
  const [account, setAccount] = useState();
  const [token, setToken] = useState();
  const [category, setCategory] = useState();

  const setAccountType = (type) => {
    setAccount(type);
  };

  const setUserToken = (token) => {
    setToken(token);
  };

  const updateMessage = (msg)=>{
    setMessage([...message, msg]);
  }

  const setUserCategory = (category)=>{
    setCategory(category)
  }

  const logOut = () => {
    setAccountType();
    setUserToken();

    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("account");
    }
  };

  useEffect(() => {
    setAccount(sessionStorage.getItem("account"));
    setToken(sessionStorage.getItem("token"));
  }, []);

  useEffect(() => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("account", account);
  }, [token, account]);

  
  return (
    <Context.Provider
      value={{
        account,
        token,
        category,
        setUserCategory,
        setAccountType: setAccountType,
        setUserToken: setUserToken,
        logOut: logOut,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
