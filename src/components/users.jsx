import { useContext, useState } from "react";
import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import { useFetch } from "../hooks/useFetch";
import not_found from "./imgs/not_found.png"

const Users = () => {
  const { state, dispatch } = useContext(Context)
  const [api, setApi] = useState(state.getUsers)
  useEffect(() => {
    setApi(state.getUsers)
  }, [state])
  const { data } = useFetch(api)
  const search = (value) => {
    if (value[0] === "#") {
      dispatch({ type: "SET_API", payload: `http://localhost:3000/users${value === '' ? "" : `?category=${value.slice(1)}`}` })
    } else {
      dispatch({ type: "SET_API", payload: `http://localhost:3000/users${value === '' ? "" : `?name=${value}`}` })
    }
  }
  return (
    <>
      <div className={` z-10 w-full relative ${state.mode ? 'bg-slate-600' : 'bg-green-300'} h-screen`}>
        {/* input */}
        <div className={`absolute w-full top-0 p-1 ${state.mode ? 'bg-slate-600' : 'bg-green-300'} `}>
          <input
            onChange={(e) => search(e.target.value)}
            className={` border-none h-8 w-full ${state.mode ? 'bg-slate-500 text-white' : 'bg-green-100 text-slate-800'}  p-1 outline-slate-200 rounded`}
            type="text"
            placeholder="search"
          />
        </div>
        {/* users */}
        <div className=" pt-10">
          {data && data.length !== 0 ?
            data.map((e) => {
              const { name, img, category } = e;
              return (
                <Link to={`${category}/${name}`}
                  key={category + name}
                  className={` flex items-center font-bold gap-4 h-14 w-full ${state.mode ? 'text-white' : 'text-black'} p-2`}
                >
                  <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-slate-400">
                    {img ? <img className=" w-10 h-10 rounded-full object-cover" src={img} />
                      : <span className=" uppercase text-white">{name.charAt(0)}{e.lastname && e.lastname.charAt(0)}</span>}
                  </div>
                  <h1>{name}</h1>
                </Link>
              );
            }) : <><div className=""><img src={not_found} alt="" /></div></>}
        </div>
      </div>
    </>
  );
};

export default Users;
