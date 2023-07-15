import { createContext, Dispatch, SetStateAction  } from "react";

interface IAppContext {
  isCover?: boolean;
  toggleCover?: () => void;
  popupIsOpen?: boolean;
  setPopupIsOpen?: Dispatch<SetStateAction<boolean>>;
  
}

const AppContext = createContext<IAppContext>({});

export default AppContext;