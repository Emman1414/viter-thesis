import React, { createContext, useReducer } from "react";
import { StoreReducer } from "./storeReducer"; // Import your reducer

// Initial state
const initialState = {
  error: null,
  info: null,
  message: null,
  success: null,
  validate: null,
  isSave: false,
  isConfirm: false,
  isRestore: false,
  isArchive: false,
  isAdd: false,
  isDelete: false,
  isView: false,
  isSearch: false,
  isAnimating: false,
};

// Create Context
export const StoreContext = createContext(initialState);

// Create Provider Component
export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
