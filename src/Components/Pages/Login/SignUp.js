import React from 'react';
import login from '../../../images/login.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = async data =>{
        await createUserWithEmailAndPassword(data.email,data.password)
        console.log(data);
    }
    return (
        <div className=' bg-emerald-100 '>
            
        <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center items-center py-10 '>
            <div className=' rounded '>
            <h2 className="text-center text-3xl font font-bold">
                Sign Up
               </h2>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                
                <div className='mx-auto font'>
                     <label htmlFor="">
                     Name
                     </label>
                    
                    <input type="text" placeholder="name" className="input w-full max-w-sm sm:w-full shadow-inner mb-2" {...register("name")}required />
                    <br />
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

                <input className='btn w-full max-w-sm text-white btn' type="submit" value="SignUp" />
                <p><small>Have an account? <Link className='text-primary' to="/login">Please Login</Link></small></p>
            </form>
            <div class="divider ">OR</div>
            <button
               onClick={() => signInWithGoogle()}
                className="btn btn-outline max-w-sm  w-full "
                >Continue with google</button>

            </div>
     
            <div className='sm:w-full'>
            <img src={login} alt=""/>
            
        </div>
        </div>
        </div>
    );
};

export default SignUp;