import { ExtendedUser } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextUser = Pick<ExtendedUser, "id" | "email" | "role">;

interface UserContextProps {
  user?: ContextUser;
  setUser: Dispatch<SetStateAction<ContextUser | undefined>>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const useUserContext = () => useContext(UserContext);

interface UserContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<ContextUser>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
