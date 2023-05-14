import { useContext, useState } from "react";
import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context";

const Users = () => {
  const [date, setDate] = useState();
  const { state } = useContext(Context)
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((date) => {
        console.log(date);
        setDate(date)
      });
  }, []);
  console.log(state.mode);
  return (
    <>
      <div className={` z-10 w-80 relative ${state.mode ? 'bg-slate-600' : 'bg-green-300'} h-screen`}>
        {/* input */}
        <div className={`absolute w-full top-0 p-1 ${state.mode ? 'bg-slate-600' : 'bg-green-300'} `}>
          <input
            className={` border-none h-8 w-full ${state.mode ? 'bg-slate-500' : 'bg-green-100'}  p-1 outline-slate-200 rounded`}
            type="text"
            placeholder="search"
          />
        </div>
        {/* users */}
        <div className=" pt-10">
          {date.map((e) => {
            console.log(e);
            const { name, img, category } = e;
            return (
              <NavLink to={`${category}/${name}`}
                key={category}
                className={` flex items-center font-bold gap-4 h-14 w-full ${state.mode ? 'text-white' : 'text-black'} p-2`}
              >
                <div className=" w-10 h-10 rounded-full bg-slate-400">
                  <img src={img} />
                </div>
                <h1>{name}</h1>
              </NavLink>
            );
          })}
        </div> 
      </div>
    </>
  );
};

export default Users;
