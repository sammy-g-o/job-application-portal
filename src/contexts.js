import { createContext, useContext } from "react";

export const BookmarksContext = createContext();

export const useBookmarks = () => useContext(BookmarksContext);
