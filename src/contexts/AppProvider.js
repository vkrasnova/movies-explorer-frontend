import { createContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {

  const [infoPopup, setInfoPopup] = useState({
    opened: false,
    text: '',
    type: '',
  });

  return (

    <AppContext.Provider value={{
      infoPopup, setInfoPopup
    }}>

        {children}

    </AppContext.Provider>

  )
} 

export default AppContext;