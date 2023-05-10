import React from "react";
import { Link, NavLink } from "react-router-dom";

function Cat({ name, icon, url }) {
  return (
    <>
      <NavLink
        to={url}
        activeClassName={`active`}
        className={` flex flex-col text-slate-400 text-base text-center gap-1 p-2 items-center w-20 justify-center cursor-pointer px-2 py-3 focus:text-amber-400 duration-200 ease-out h-18`}>
        <i class={`${icon} text-slate-400 text-3xl`}></i>
        <h2>{name}</h2>
      </NavLink>
    </>
  );
}

export default Cat;
