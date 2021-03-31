import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  userId: null,
  userInfo: null,
  /* handle: null,*/
  login: () => {},
  logout: () => {},
});
