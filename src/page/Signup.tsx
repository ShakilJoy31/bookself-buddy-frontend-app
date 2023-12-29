import '../styles/dashboard.css';

import React, { useState } from 'react';

import {
  AiFillEye,
  AiFillEyeInvisible,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const Signup: React.FC<{}> = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [isPasswordVasible, setIsPasswordVasible] = useState(true); 

    return (
        <div className='mt-[25px] mx-2 md:mx-4 lg:mx-6'>
            <div>
            {
                <p className='flex justify-center' style={{padding: '5px', border: '1px solid crimson', background: 'rgba(220, 20, 60, 0.208)', marginTop: '-10px'}}>Invalid User</p>
            }

            <h1 className="flex justify-center text-4xl text-white">Sign up here</h1>
            <div className="flex justify-center">
                <div>
                    <div className='my-6'>

                        <input style={{border: '1px solid crimson'}} type="text" placeholder='Type your name here' className="w-[290px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none block mx-auto mb-4" required />

                        <input style={{border: '1px solid crimson'}} type="email" placeholder='Type your email here' className="w-[290px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none block mx-auto mb-4" required />

                        <input style={{border: '1px solid crimson'}} type="number" placeholder='Type your number here' className="w-[290px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none block mx-auto mb-4" required />
                        

                        <div style={{border: '1px solid crimson'}} className="flex items-center justify-between bg-black border-0 rounded-lg w-[290px] lg:w-96 md:w-96">
                                <input type={isPasswordVasible ? 'password' : 'text'} placeholder='Type your password' className="mr-4 w-[270px] bg-black border-0 lg:w-96 md:w-96 input focus:outline-none" />
                                {
                                    isPasswordVasible ? <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEyeInvisible size={25}></AiFillEyeInvisible></span> : <span onClick={()=>setIsPasswordVasible(!isPasswordVasible)} className="mr-2"><AiFillEye size={25}></AiFillEye></span>
                                }
                        </div>
                    </div>

                    {
                        <button className={`block w-full mx-auto normal-case border-0 btn mb-4 btn-sm loginButton`}>Sign up</button>
                    }
                    
                </div>
            </div>
            <span onClick={()=> {
                            navigate('/login')
                        }} className={`date hover:cursor-pointer flex justify-center`}>Already have an accounnt? Login</span>
        </div>
        </div>
    )
}