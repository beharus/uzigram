import React, { useContext } from 'react'
import { Context } from '../../context'

const MessagesContainer = () => {
    const { state } = useContext(Context)
    return (
        <div className={` bg-${state.mode ? 'slate' : 'green'}-500 w-full ml-auto min-h-screen`}>
            {/* header */}
            <div className={` absolute top-0 left-0 right-0 px-3 py-2 ${state.mode ? 'bg-slate-600' : 'bg-green-300'}`}>
                <div className="">
                    <h1 className={` font-bold ${state.mode ? ' text-slate-50' : 'text-slate-900'}`}>Aziz</h1>
                    <p className=' text-gray-400'>last seen resently</p>
                </div>
                <div className="">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-phone"></i>
                    <i class="fa-solid fa-circle-info"></i>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
        </div>
    )
}

export default MessagesContainer