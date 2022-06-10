import { useState, createContext, useContext } from 'react';

export type UserContextState = {
  user: object;
};
const UserContext = createContext<UserContextState | null>(null);

export function useUser() {
  return useContext(UserContext);
}

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState<object | null>(null);

  // retrieve the user here
}
