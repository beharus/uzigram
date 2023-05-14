import { useReducer } from "react";
import { createContext } from "react";

const initialVal = {
  setModel: true,
  mode: localStorage.getItem('darkMode') === 'true',

};
export const Context = createContext();

const reducer = (state = initialVal, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'MODE':
      localStorage.setItem('darkMode', !state.mode);
       return { ...state, mode: !state.mode };
    case "SET_TOGGLE":
      const hhh = state.setModel
      return { ...state, setModel: !hhh };

  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);


  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;


