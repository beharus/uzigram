import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context";
import Settings from "./settings/settings";
import Contact from "./contacts/Contact";





function Setsidebar(props) {
  let { close, open } = props;
  const { state, dispatch } = useContext(Context);
  const setMode = () => {
    dispatch({ type: "MODE" })
  };
  const setContacts = () => {
    dispatch({ type: "CONTACTS" })
    console.log(state.contact);
  }
  return (
    <div
      onClick={(e) => e.target.className.includes("overlay") && close()}
      className={`overlay duration-200 fixed top-0 bottom-0 ${!open ? `-left-full` : `left-0`
        } w-full bg-[#00000050] backdrop-blur-sm z-50`}
    >
      <div
        className={`w-10/12 px-4 py-8 h-full sm:w-3/5 md:w-1/3 ${state.mode ? `bg-slate-800` : `bg-green-800`
          } shadow-md ${state.mode ? `shadow-slate-500` : `shadow-green-500`
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
          <Link to={"/new-group"}>
            <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } p-2  rounded text-white`}
            >
              <div className="">
                <i className="fa-solid fa-user-group py-2 px-[6px] rounded bg-blue-500"></i>
              </div>
              <span className="pl-[10px]">New group</span>
            </div>
          </Link>

          <Link to={"/new-channel"}>
            <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } p-2  rounded text-white`}
            >
              <div className="">
                <i class="fa-brands fa-github py-2 px-[9px] rounded bg-amber-400"></i>
              </div>
              <span className="pl-[10px]">New Channel</span>
            </div>
          </Link>

          <Link onClick={setContacts} to={"/contacts"}>
            <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } p-2 rounded text-white`}
            >
              <div className="">
                <i className="fas fa-solid fa-user py-2 px-[9px] rounded bg-red-400"></i>
              </div>
              <span className="pl-[10px]">Contacts</span>
            </div>
          </Link>
          <div className={`${state.contact?"block":"hidden"}`}>
                <Contact/>
          </div>

          <Link to={"/calls"}>
            <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } p-2 rounded text-white`}
            >
              <div className="">
                <i className="fas fa-solid fa-phone p-2 rounded bg-green-400"></i>
              </div>
              <span className="pl-[10px]">Calls</span>
            </div>
          </Link>

          <Link to={"/calls"}>
            <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } p-2 rounded text-white`}
            >
              <div className="">
                <i className="fa-sharp fa-solid fa-bookmark py-2 px-[10px] rounded bg-blue-400"></i>
              </div>
              <span className="pl-[10px]">Saved Messages</span>
            </div>
          </Link>

          <Link to={"/setting"}>
            <div
              onClick={() => {
                dispatch({ type: 'SETTINGS' })
              }}
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } p-2 rounded text-white`}
            >
              <div className="">
                <i className="fas fa-solid fa-gear p-2 rounded bg-fuchsia-500"></i>
              </div>
              <span className="pl-[10px]">Settings</span>
            </div>
          </Link>


          <div className={`flex justify-between items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
            } p-2 rounded text-white`}
          >
            <div className="flex gap-1 items-center">
              <div className="flex gap-1">
                <i className="fas fa-moon fa-gear py-2 px-[10px] rounded bg-blue-900"></i>
              </div>
              <span className="pl-[10px]">Night Mode</span>
            </div>
            <div onClick={setMode} className={` duration-500 w-16 h-6 ${state.mode ? "bg-slate-500" : "bg-green-500"} relative rounded-3xl`}>
              <div className={` w-8 h-8 border-2 absolute transition-all duration-500 -top-1 ${state.mode ? "bg-slate-700 right-0" : "bg-green-700 left-0"} rounded-full `}></div>
            </div>
          </div>

        </div>

        {state.settings && <Settings />}
      </div>
    </div>
  );
}

export default Setsidebar;
