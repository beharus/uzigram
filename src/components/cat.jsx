import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context";

function Cat({ name, icon, url }) {
  const { state } = useContext(Context);

  return (
    <>
      <NavLink
        to={url}
        className={` flex flex-col text-${
          state.setModel ? `slate` : `green`
        }-400 text-base text-center gap-1 p-2 items-center w-20 justify-center cursor-pointer px-2 py-3 focus:text-amber-400 duration-200 ease-out h-18`}>
        <i
          class={`${icon} text-${
            state.setModel ? `slate` : `green`
          }-400 text-3xl`}></i>
        <h2>{name}</h2>
      </NavLink>
    </>
  );
}

export default Cat;
