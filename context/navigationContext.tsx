import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface NavigationContextProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const NavigationContext = createContext<NavigationContextProps>(
  {} as NavigationContextProps
);

export const useNavigationContext = () => useContext(NavigationContext);

interface NavigationContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const NavigationContextProvider = ({
  children,
}: NavigationContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationContextProvider };
