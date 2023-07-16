import { createContext  } from "react";

interface IAppContext {
  isLoading?: boolean;
  isCover?: boolean;
  toggleCover?: () => void;
  openClientForm?: () => void;
}

const AppContext = createContext<IAppContext>({});

export default AppContext;