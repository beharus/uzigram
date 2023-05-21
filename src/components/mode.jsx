import React, { useContext, useState } from "react";
import { Context } from "../context";


function Mode() {
  const { state, dispatch } = useContext(Context);
  const setMode = () => {
    dispatch({ type: "MODE" })
  };
  return (
    <div>
      <div
        onClick={() => {
          setMode();
        }}
        className={`text-${state.mode ? 'slate' : 'green'}-400 text-3xl py-2 px-3 cursor-pointer`}>
        <i className={`fa-solid fa-${state.mode ? 'moon' : 'sun'}`}></i>
      </div>
    </div>
  );
}

export default Mode;
