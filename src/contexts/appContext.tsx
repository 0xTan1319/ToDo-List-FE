import { IAppProps } from "@utils/typeUtils";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface IAppContextType {
  app: IAppProps;
  setApp: Dispatch<SetStateAction<IAppProps>>;
}

const AppContext = createContext<IAppContextType | undefined>(undefined);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [app, setApp] = useState<IAppProps>({
    toggle: true,
    isLogged: false,
    tasks: [],
    linkType: "all",
  });

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("Occure error in app context");
  }

  return context;
};

export { AppProvider, useApp };