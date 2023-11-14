import { createContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  
  const [isInfoPopupOpened, setIsInfoPopupOpened] = useState(false);
  const [infoPopupText, setInfoPopupText] = useState('');
  const [infoPopupType, setInfoPopupType] = useState('');

  return (

    <AppContext.Provider value={{
      isInfoPopupOpened, setIsInfoPopupOpened,
      infoPopupText, setInfoPopupText,
      infoPopupType, setInfoPopupType,
    }}>

        {children}

    </AppContext.Provider>

  )
} 

export default AppContext;