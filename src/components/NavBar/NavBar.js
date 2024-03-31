import React from 'react'
import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth} from '../../context/AuthContext'

function NavBar() {
  const {user, logOut} = UserAuth()
  const navigate = useNavigate()
  console.log(user)

  const handleLogout = async() =>{
    try{
      await logOut()
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='absolute z-10 w-full flex items-center justify-between p-6'>
      <Link to='/'>

      <img className='lg:ml-32 w-20  lg:w-32 xl:w-40 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
      </Link>
      <div className='flex xl:mr-36 '>
          <select className='select w-16 lg:w-28 bg-black rounded h-8 mr-2 lg:mr-7 text-center'>
              <option>English</option>
              <option>हिंदी</option>
          </select>
          {user? 
          <div>
          <Link to='/account'> <button className='select2 text-white bg-none border-none w-16 lg:w-28 bg-black rounded h-8 mr-2 lg:mr-7 text-center'>Account</button> </Link>
            <button onClick={handleLogout} className='bg-mred h-8 text-white text-center rounded font-bold w-20'>LogOut</button>
          </div> :(<Link to='/signup'>
            <button className='bg-mred h-8 text-white text-center rounded font-bold w-20'>Sign Up</button>
          </Link>) }
      </div>

  </div>
  )
}

export default NavBar
