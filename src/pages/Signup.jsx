import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user, signUp} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await signUp(email, password);
            navigate('/')
        }catch (error){
            console.log(error);
        }
    };
    useEffect(()=>{
        console.log(email,password)
    },[signUp])

  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg ' alt="netflixBG" /> 
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50' >
            <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white' >
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign UP</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='current-email' />
                        <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password' />
                        <button className='bg-mred py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className="mr-2" type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'><span className='text-gray-600'>Already subscribed to Netflix?</span>{' '}<Link to='/login'>  Sign In</Link></p>
                    </form>

                </div>
            </div>  
        </div>
    </div>
    </>
 
  )
}

export default Signup