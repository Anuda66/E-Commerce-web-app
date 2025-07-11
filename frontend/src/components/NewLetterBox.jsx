import React from 'react'

function NewLetterBox() {

    const onSUbmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore asperiores modi?</p>
      <form onSubmit={onSUbmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-0 ' type='email' placeholder='Enter your email' required/>
        <button className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewLetterBox
