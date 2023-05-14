import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";

function Setsidebar(props) {
  let { close, open } = props;
  const { state } = useContext(Context);
  return (
    <div
      onClick={(e) => e.target.className.includes("overlay") && close()}
      className={`overlay duration-200 fixed top-0 bottom-0 ${
        !open ? `-left-full` : `left-0`
      } w-full bg-[#00000050] backdrop-blur-sm z-50`}
    >
      <div
        className={`w-10/12 px-4 py-8 h-full sm:w-3/5 md:w-1/3 ${
          state.mode ? `bg-slate-800` : `bg-green-800`
        } shadow-md ${
          state.mode ? `shadow-slate-500` : `shadow-green-500`
        }`}
      >
        <div className="">
          <img
            className=" w-16 rounded-full shadow-md shadow-slate-500 cursor-cell mb-2"
            src="https://static01.nyt.com/images/2020/08/07/sports/07rorynewsletter-silva1/07rorynewsletter-silva1-mediumSquareAt3X.jpg"
            alt=""
          />
          <h1 className=" text-xl  text-white">behkruz</h1>
        </div>
        {/* line */}
        <div className="w-full h-px my-1 bg-black"></div>
        {/* open */}
        <div className=" py-4">
          <Link to={"/setting"}>
            <div
              className={` flex gap-1 items-center text-lg ${
                state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
              } p-2 rounded text-white`}
            >
              <div className="">
                <i className="fas fa-solid fa-gear p-2 rounded bg-fuchsia-500"></i>
              </div>
              <span>Settings</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Setsidebar;
