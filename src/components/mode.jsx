import React, { useState } from "react";

function Mode() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setToggle(true);
        }}
        class={`text-slate-400 text-3xl py-2 px-3 cursor-pointer ${
          toggle && `hidden`
        }`}>
            <i className="fa-solid fa-sun"></i>
        </div>
      <div
        onClick={() => {
          setToggle(false);
        }}
        class={`text-green-400 text-3xl py-2 px-3 cursor-pointer ${
          !toggle && `hidden`
        }`}>
        <i className="fa-solid fa-moon"></i></div>
    </div>
  );
}

export default Mode;
