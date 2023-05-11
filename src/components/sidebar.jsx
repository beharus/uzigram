import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cat from "./cat";
import Mode from "./mode";
import Setsidebar from "./setsidebar";
import { useContext } from "react";
import { Context } from "../context";

function Sidebar() {
  const [cat, setCat] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch(" http://localhost:5000/categories")
      .then((resp) => resp.json())
      .then((data) => setCat(data));
  }, []);
  const openFunc = (boolean) => {
    setOpen(boolean);
  };
  const { state } = useContext(Context);
  return (
    <div className="">
      <div
        className={`fixed left-0 top-0 bottom-0 min-h-screen h-full w-20 ${
          state.setModel ? `bg-slate-800` : `bg-green-900`
        }  shadow-md ${
          state.setModel ? `shadow-slate-500` : `shadow-green-500`
        }   flex flex-col gap-14 py-4 items-center`}>
        <div className="">
          {/* btn */}
          <div onClick={() => openFunc(true)} className="">
            <div className=" flex flex-col gap-1 cursor-pointer">
              <div className="w-8 h-1 rounded-lg bg-slate-200"></div>
              <div className="w-8 h-1 rounded-lg bg-slate-200"></div>
              <div className="w-8 h-1 rounded-lg bg-slate-200"></div>
            </div>
          </div>
          {/* sidebar */}
          <Setsidebar open={open} close={() => openFunc(false)} />
        </div>
        {/* categories */}
        <div className="">
          {cat.map((el) => {
            const { name, icon, url } = el;
            return <Cat key={name} name={name} icon={icon} url={url} />;
          })}
        </div>
        {/* mode */}
        <div className="">
          <Mode />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
