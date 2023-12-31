import '../styles/dashboard.css';

import React, {
  useEffect,
  useState,
} from 'react';

import {
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { useGetSignedInUserMutation } from '../redux/api/apiSlice';
import { setUser } from '../redux/features/user/userSlice';
import { useAppDispatch } from '../redux/hook';

export const Login: React.FC<{}> = () => {
    const dispatch = useAppDispatch();
    let [getSignedInUser, { data, isLoading, isError }] = useGetSignedInUserMutation();
    console.log(data, isLoading, isError);
    const navigate = useNavigate();
    const [isPasswordVasible, setIsPasswordVasible] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignIn, setInSignIn] = useState(false);

    useEffect(()=>{
        if (data?.status === 'success') {
            setInSignIn(true);
            localStorage.setItem('bookself-buddy-user', JSON.stringify(data?.data))
            dispatch(setUser(data.data));
            setTimeout(function () {
                setInSignIn(false);
                navigate('/')
            }, 2800);
        }
    },[data])
    const handleLogin = () => {
        const userCrediential = {
            email: email,
            password: password
        }
        getSignedInUser(userCrediential)
    }
    return (
        <div className='mt-[25px] mx-2 md:mx-4 lg:mx-6'>
            <div>
            {
                (data?.status === 'success' && isSignIn) ? <p className='flex justify-center' style={{padding: '5px', border: '1px solid crimson', background: 'rgba(220, 20, 60, 0.208)', marginTop: '-10px'}}>Login Successful</p> : ''
            }

            <h1 className="flex justify-center text-4xl text-white">Login here</h1>
            <div className="flex justify-center">
                <div>
                    <div className='my-6'>

                        <input onChange={(e)=>setEmail(e.target.value)} style={{border: '1px solid crimson'}} type="email" placeholder='Type your email here' className="w-[290px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none block mx-auto mb-4" required />
                        

                        <div style={{border: '1px solid crimson'}} className="flex items-center justify-between bg-black border-0 rounded-lg w-[290px] lg:w-96 md:w-96">
                                <input onChange={(e)=>setPassword(e.target.value)} type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="mr-4 w-[270px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none" />
                                {
                                    isPasswordVasible ? <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                        </div>
                    </div>

                    {
                        <button onClick={handleLogin} className={`block w-full mx-auto normal-case border-0 btn mb-4 btn-sm loginButton`}>Log in</button>
                    }
                    
                </div>
            </div>
            <span onClick={()=> {
                            navigate('/signup')
                        }} className={`date hover:cursor-pointer flex justify-center`}>New to Book self buddy? Sign up</span>
        </div>
        </div>
    )
}