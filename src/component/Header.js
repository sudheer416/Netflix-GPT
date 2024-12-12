import React from 'react'
import { FORM_BACKGROUND_IMG, NETFLIx_LOGO } from '../utils/constanst'
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../utils/authSlice'
import { useNavigate } from 'react-router-dom'
import {getToken} from "../utils/authServices"






const Header = () => {
  const user=useSelector(store=>store.auth)

  const token=  getToken()
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
const signoutHandler=()=>{
dispatch(removeUser())

navigate("/")


}
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img  className="w-40 md:mx-0"src={NETFLIx_LOGO} alt="netflix-logo"/>
        {token &&
        <div className='w-15 flex p-3 text-red-500 text-lg font-bold '>
          <img className="w-12 m-3"  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"  alt="user-img"/>
          <button onClick={signoutHandler}>Sign out</button>
        </div>
}
    


    </div>
  )
}

export default Header