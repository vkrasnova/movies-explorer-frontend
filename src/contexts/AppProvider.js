import { createContext, useState } from 'react';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  
  const [isInfoPopupOpened, setIsInfoPopupOpened] = useState(false);
  const [infoPopupText, setInfoPopupText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  return (

    <AppContext.Provider value={{
      isInfoPopupOpened, setIsInfoPopupOpened,
      infoPopupText, setInfoPopupText,
      errorMessage, setErrorMessage,
    }}>

        {children}

    </AppContext.Provider>

  )
} 

export default AppContext;