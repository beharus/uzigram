import React, { useContext, useState } from "react";
import { Context } from "../context";


function Mode() {
  const { state, dispatch } = useContext(Context);
  console.log(state);
  const [toggle, setToggle] = useState(true);


  const setMode =  () => {


  dispatch({ type: "MODE" })

   

  };
  return (
    <div>
      <div
        onClick={() => {
          setMode();
        }}
        class={`text-slate-400 text-3xl py-2 px-3 cursor-pointer`}>
        <i className={`fa-solid fa-${state.mode ? 'moon' : 'sun'}`}></i>
      </div>
      {/* <div
        onClick={() => {
          setMode(false);
        }}
        class={`text-green-400 text-3xl py-2 px-3 cursor-pointer ${
          !state.mode && `hidden`
        }`}>
        <i className="fa-solid fa-moon"></i>
      </div> */}
    </div>
  );
}

export default Mode;
