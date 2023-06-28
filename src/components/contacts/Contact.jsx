import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context'

const Contact = () => {
    const { state, dispatch } = useContext(Context)
    useEffect(() => {
        const date = {
            "name": "Asomiddin",
            "lastname": "as",
            "img": "",
            "category": "personals",
            "messages": []
        }
            fetch('http://localhost:3000/users', {
                method: "POST",
                body: JSON.stringify(date),
                headers: {
                    "Content-Type": "application/json",
                }
            })
    }, [])
    const closeModal = () => {
        dispatch({ type: "CONTACTS" })
    }
    return (
        <>
            <div onClick={closeModal} className=" fixed z-50 backdrop-blur-sm top-0 left-0 right-0 bottom-0 bg-[#0303038c]">
                <div className="">
                    <h2>Contact</h2>
                    <input type="text" />
                </div>
            </div>
        </>
    )
}

export default Contact