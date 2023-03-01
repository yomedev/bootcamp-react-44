import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [username, setUsername] = useState("");

  const login = async (username, password) => {
    if (password === "123") {
      setIsAuth(true);
      setUsername(username);
      return;
    }
    console.log('Error');
    throw new Error('Incorect password')
  };

  const logout = () => {
    setIsAuth(false);
    setUsername("");
  };

  return (
    <AuthContext.Provider value={{ isAuth, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
