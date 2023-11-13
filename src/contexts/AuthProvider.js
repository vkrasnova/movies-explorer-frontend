import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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