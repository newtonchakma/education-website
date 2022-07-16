import React from 'react';
import login from '../../../images/login.png'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className=' bg-emerald-100 '>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center items-center py-10 '>
            <div className=' rounded '>
            <h2 className="text-center text-3xl font font-bold">
                Login
               </h2>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                
                <div className='mx-auto font'>
                     <label htmlFor="">
                     Email
                     </label>
                    
                    <input type="email" placeholder="Email" className="input w-full max-w-sm sm:w-full shadow-inner mb-2"required {...register("email")} />
                    <br />
                    <label >
                       password
                    </label>
                    <input type="text" placeholder="password" className="input w-full max-w-sm sm:w-full shadow-inner mb-2" required {...register("password")}/>
                
                </div>

                <input className='btn w-full max-w-sm text-white btn' type="submit" value="Login" />
                <p><small>Don't have an account? <Link className='text-primary' to="/signup">Please SignUp</Link></small></p>
            </form>
            <div class="divider ">OR</div>
            <button
               onClick={() => signInWithGoogle()}
                className="btn btn-outline max-w-sm  w-full"
                >Continue with google</button>

            </div>
     
            <div className='sm:w-full'>
            <img src={login} alt=""/>
            
        </div>
        </div>
        </div>
        
    );
        
};

export default Login;