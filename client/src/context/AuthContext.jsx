import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const AuthContext = createContext(INITIAL_STATE);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        loading: false,
        error: null,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
