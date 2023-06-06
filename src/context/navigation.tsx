import { createContext, useState, useEffect, ReactNode } from "react";

interface NavigationProviderProps {
  children: ReactNode;
}

interface INavigationContext {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext({} as INavigationContext);

const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname,
  );

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handler);

    return () => {
      window.removeEventListener("popstate", handler);
    };
  }, []);

  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
