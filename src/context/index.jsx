import { useReducer } from "react";
import { createContext } from "react";

const initialVal = {
  setModel: true,
};
export const Context = createContext();

const reducer = (state = initialVal, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_TOGGLE":
      return { ...state, setModel: payload };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;
