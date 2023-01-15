import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext({});

const viewport = () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  if (vw >= 992) {
    return "lg";
  } else if (vw >= 768) {
    return "md";
  } else if (vw >= 576) {
    return "sm";
  } else {
    return "xs";
  }
}

export function AppWrapper({ children }) {
  const [device, setDevice] = useState("lg");
  useEffect(() => {
    setDevice(viewport());
  }, []);
  
  useEffect(() => {
    const resizeHandler = () => {
      setDevice(viewport());
    }
    window.addEventListener('resize', resizeHandler)
    return (() => {
      window.removeEventListener('resize', resizeHandler);
    })
  })
  return <Context.Provider value={device}>{children}</Context.Provider>;
}

export function useAppContext() {
  return useContext(Context);
}
