import { theme } from '@nextui-org/react';
import { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext({});

export function AppWrapper({ children }) {
    const [device, setDevice] = useState('xl')
    useEffect(() => {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      if(vw >= 992){
        setDevice('lg');
      }
      else if(vw >= 768){
        setDevice('md');
      }
      else if(vw >= 576){
        setDevice('sm');
      }
      else{
        setDevice('xs');
      }
    }, [])

  return (
    <Context.Provider value={device}>
      {children}
    </Context.Provider>
  );
}

export function useAppContext() {
  return useContext(Context);
}