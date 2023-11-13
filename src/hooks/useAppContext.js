import { useContext } from 'react';
import AppContext from '../contexts/AppProvider';

const useAppContext = () => {
  return useContext(AppContext);
}

export default useAppContext;