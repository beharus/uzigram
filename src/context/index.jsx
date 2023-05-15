import { useReducer } from "react";
import { createContext } from "react";

const initialVal = {
  setModel: true,
  mode: localStorage.getItem('darkMode') === 'true',
  settings:false

};
export const Context = createContext();

const reducer = (state = initialVal, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SETTINGS' :
      const sss = state.settings
      return {...state , settings:!sss}
    case 'MODE':
      localStorage.setItem('darkMode', !state.mode);
       return { ...state, mode: !state.mode };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialVal);


  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export default Provider;


