import { createContext } from "react";

interface IAppContext {
  isCover?: boolean;
  toggleCover?: () => void;
}

const AppContext = createContext<IAppContext>({});

export default AppContext;