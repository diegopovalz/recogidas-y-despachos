import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
} from 'react';

interface RecogidasContextProps {
  openModalRecogidas: boolean;
  setOpenModalRecogidas: Dispatch<SetStateAction<boolean>>;
  openModalDespachos: boolean;
  setOpenModalDespachos: Dispatch<SetStateAction<boolean>>;
}

const RecogidasContext = createContext<RecogidasContextProps>(
  {} as RecogidasContextProps
);

export const useRecogidasContext = () => useContext(RecogidasContext);

interface RecogidasContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const RecogidasContextProvider = ({
  children,
}: RecogidasContextProviderProps) => {
  const [openModalDespachos, setOpenModalDespachos] = useState(false);
  const [openModalRecogidas, setOpenModalRecogidas] = useState(false);
  return (
    <RecogidasContext.Provider
      value={{
        openModalDespachos,
        setOpenModalRecogidas,
        openModalRecogidas,
        setOpenModalDespachos,
      }}
    >
      {children}
    </RecogidasContext.Provider>
  );
};

export { RecogidasContextProvider };
