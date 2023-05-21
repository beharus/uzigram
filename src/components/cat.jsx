import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context";

function Cat({ name, icon, url }) {
  const { state, dispatch } = useContext(Context);
  const setData = (url) => {
    dispatch({ type: "SET_API", payload: `http://localhost:3000/users${url === "All messages" ? "/" : `?category=${url}`}` })
  }

  return (
    <>
      <NavLink
        to={url}
        onClick={() => { setData(name) }}
        className={` flex flex-col text-${state.mode ? `slate` : `green`
          }-400 text-base text-center gap-1 p-2 items-center w-20 justify-center cursor-pointer px-2 py-3 focus:text-amber-400 duration-200 ease-out h-18`}>
        <i
          className={`${icon} ${state.mode ? `text-slate-400` : `text-green-400`
            } text-3xl`}></i>
        <h2>{name}</h2>
      </NavLink>
    </>
  );
}

export default Cat;
