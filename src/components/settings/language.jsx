import React from 'react'

const Language = () => {
  return (
    <div>
        <select className='text-blue-400  bg-transparent outline-none' name="lan" id="">
        <option className='rounded' value="english">English</option> 
        <option className='rounded'  value="russia">Русский</option>
        <option className='rounded'  value="uzbek">O'zbek</option>
        </select> 
    </div>
  )
}

export default Language