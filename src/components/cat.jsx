import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../context";

function Cat({ name, icon, url }) {
  const { state, dispatch } = useContext(Context);
  const setData = (url) => {
    dispatch({
      type: "SET_API",
      payload: `http://localhost:3000/users${
        url === "All messages" ? "/" : `?category=${url}`
      }`,
    });
  };
  const activeLink = ` flex flex-col ${
    state.mode ? "text-slate-100 bg-slate-600" : "text-green-100 bg-green-400"
  } text-base text-center gap-1 p-2 items-center w-20 justify-center cursor-pointer px-2 py-3 duration-200 ease-out h-18`;
  const normalLink = ` flex flex-col ${
    state.mode ? `text-slate-400` : `text-green-400 `
  } text-base text-center gap-1 p-2 items-center w-20 justify-center cursor-pointer px-2 py-3 duration-200 ease-out h-18`;

  return (
    <>
      <NavLink
        key={name}
        to={url}
        className={({ isActive }) => (isActive ? activeLink : normalLink)}
        onClick={() => {
          setData(name);
        }}>
        <i className={`${icon} text-3xl`}></i>
        <h2>{name}</h2>
      </NavLink>
    </>
  );
}

export default Cat;
