import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  }); // временно

  const [isLoggedIn, setIsLoggedIn] = useState(true); // временно

  return (

    <AuthContext.Provider value={{
      currentUser, setCurrentUser,
      isLoggedIn, setIsLoggedIn,
    }}>

        {children}

    </AuthContext.Provider>

  )
} 

export default AuthContext;