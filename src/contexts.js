import { createContext, useContext } from "react";

export const BookmarksContext = createContext();
export const useBookmarks = () => useContext(BookmarksContext);

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
