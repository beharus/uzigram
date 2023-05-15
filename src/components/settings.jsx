import React, { useContext } from 'react'
import { Context } from '../context'

const Settings = () => {
    const {  state,dispatch } = useContext(Context)

    const setSet = (e)=>{
        if(e.target.className.includes('setset')){
            dispatch({type:'SETTINGS'})
        }
    }
  return (
    <div onClick={setSet} className='setset fixed bg-[#0303038c] flex justify-center justify-items-center  top-0 left-0 right-0 bottom-0'>
      <div className='w-[375px] rounded my-[60px] bg-slate-900 backdrop-blur-sm z-50'>
        <div className='flex justify-between py-4 px-6'>
          <h1 className='text-white text-[18px]'>Settings</h1>
       
          <div className='flex'>
          <div className='px-4 h-1'>
                <p className='w-[5px] h-[5px] rounded-full mb-[1.9px] bg-slate-600'></p>
                <p className='w-[5px] h-[5px] rounded-full mb-[1.9px] bg-slate-600'></p>
                <p className='w-[5px] h-[5px] rounded-full bg-slate-600'></p>
               
            </div>
          <div>
          <i  onClick={()=>{
            dispatch({type:'SETTINGS'})
          }} class="fa-solid block text-white text-[22px] fa-xmark"></i>
          </div>
          </div>
        </div>
        <div className='flex justify-items-center px-4 py-4'>
        <img
            className=" w-16 rounded-full shadow-md shadow-slate-500 cursor-cell mb-2"
            src="https://static01.nyt.com/images/2020/08/07/sports/07rorynewsletter-silva1/07rorynewsletter-silva1-mediumSquareAt3X.jpg"
            alt=""
          />
         <div className='px-4'>
         <p className=' text-white  ' >Bekruz</p>
          <p className='text-[#eae6e6]'>+998 93 951 81 05</p>
          <p className='text-[#b4afaf]'>@Beha_coder</p>
         </div>
        </div>
        <div className='w-full h-[10px] my-2 bg-slate-700'></div>

        <div>
        <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i class="fa-solid fa-circle-user text-[20px] py-2 px-[7px] rounded bg-[#d28820]"></i>
              </div>
              <span className="pl-[10px]">Edit Profile</span>
            </div>
        </div>

        <div>
        <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i class="fa-solid fa-bell  bg-red-400 py-2 px-[7px] rounded "></i>
              </div>
              <span className="pl-[10px]">Notification and Sounds</span>
            </div>
        </div>

        <div>
           <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i class="fa-solid fa-comment "></i>
              </div>
              <span className="pl-[10px]">Privace and Security</span>
            </div>
        </div>

        <div>
           <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i class="fa-solid fa-comment bg-blue-400 py-2 px-[7px] rounded"></i>
              </div>
              <span className="pl-[10px]">Chat Settings</span>
            </div>
        </div>

        <div>
           <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i class="fa-solid fa-folder bg-blue-500 py-2 px-[7px] rounded"></i>
              </div>
              <span className="pl-[10px]">Folders</span>
            </div>
        </div>
 
        <div>
           <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i className="fas fa-solid fa-phone p-2 rounded bg-green-400"></i>
              </div>
              <span className="pl-[10px]">Call Settings</span>
            </div>
        </div>
        
        
        <div>
           <div
              className={` flex gap-1 items-center text-lg ${state.mode ? `hover:bg-slate-700` : `hover:bg-green-700`
                } py-2  px-5 rounded text-white`}
            >
              <div className="">
              <i class="fa-sharp fa-regular fa-earth-americas"></i>
              </div>
              <span className="pl-[10px]">Language</span>
            </div>
        </div>
        


      </div>
    </div>
  )
}

export default Settings