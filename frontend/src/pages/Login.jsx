import React, { useContext, useState } from 'react'
import { ShoopContext } from '../context/shopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {

  const [currentState, setCurrentState] = useState('Sing Up')
  const { navigate, backendUrl, token, setToken } = useContext(ShoopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === 'Sing Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        //console.log(response);
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          token.error(response.data.message)
        }
      }
      else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        //console.log(response);
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else{
          toast.error(response.data.message)
        }

      }
    }
    catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
      <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='prata-regular text-3xl '> {currentState} </p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 ' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(event) => setName(event.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input onChange={(event) => setEmail(event.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input onChange={(event) => setPassword(event.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>

        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sing Up')} className='cursor-pointer'>Create an Account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer '>Login Here</p>
        }
        {currentState === 'Sing Up' ? '' : <p className='cursor-pointer underline'>Forgot Password?</p>}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4 cursor-pointer active:bg-gray-700'> {currentState === 'Login' ? 'Sing In' : 'Sing Up'} </button>
    </form>
  )
}

export default Login
