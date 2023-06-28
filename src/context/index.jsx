import { useReducer } from "react";
import { createContext } from "react";

const initialVal = {
  mode: localStorage.getItem('darkMode') === 'true',
  settings: false,
  getUsers: "http://localhost:3000/users",
  color: false,
  contact: false

};
export const Context = createContext();

const reducer = (state = initialVal, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'COLOR':
      const col = state.color
      return { ...state, color: !col }
    case 'SETTINGS':
      if (state.color) {
        const sss = state.settings
        return { ...state, settings: true, color: false }
      } else {
        const sss = state.settings
        return { ...state, settings: !sss }
      }
    case 'MODE':
      localStorage.setItem('darkMode', !state.mode);
      return { ...state, mode: !state.mode };
    case "SET_API":
      return { ...state, getUsers: payload }
    case "CONTACTS":
      const cont = state.contact
      return { ...state, contact: !cont }
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);


  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;


