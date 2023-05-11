import React, { useContext, useState } from "react";
import { Context } from "../context";

function Mode() {
  const { state, dispatch } = useContext(Context);
  console.log(state);
  const [toggle, setToggle] = useState(false);

  const setMode = (boolean) => {
    setToggle(boolean);
    dispatch({ type: "SET_TOGGLE", payload: toggle });
  };
  return (
    <div>
      <div
        onClick={() => {
          setMode(true);
        }}
        class={`text-slate-400 text-3xl py-2 px-3 cursor-pointer ${
          toggle && `hidden`
        }`}>
        <i className="fa-solid fa-sun"></i>
      </div>
      <div
        onClick={() => {
          setMode(false);
        }}
        class={`text-green-400 text-3xl py-2 px-3 cursor-pointer ${
          !toggle && `hidden`
        }`}>
        <i className="fa-solid fa-moon"></i>
      </div>
    </div>
  );
}

export default Mode;
