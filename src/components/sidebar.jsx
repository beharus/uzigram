import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cat from "./cat";
import Mode from "./mode";

function Sidebar() {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/categories")
      .then((resp) => resp.json())
      .then((data) => setCat(data));
  }, []);
  console.log(cat);
  return (
    <div className="">
      <div className="fixed left-0 top-0 bottom-0 min-h-screen h-full w-20 bg-slate-800 shadow-md shadow-slate-500 flex flex-col gap-14 py-4 items-center">
        {/* btn */}
        <div className="">
          <div className=" flex flex-col gap-1 cursor-pointer">
            <div className="w-8 h-1 rounded-lg bg-slate-200"></div>
            <div className="w-8 h-1 rounded-lg bg-slate-200"></div>
            <div className="w-8 h-1 rounded-lg bg-slate-200"></div>
          </div>
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
          <Mode/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
