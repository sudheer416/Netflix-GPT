import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { FORM_BACKGROUND_IMG } from '../utils/constanst';
import { registerUser,loginUser ,removeToken} from '../utils/authServices';
import Header from './Header';
import { setAuthToken,setUser } from '../utils/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import FormErrorComponent from './FormErrorComponent';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [error, setError] = useState(null);
  const dispatch=useDispatch()
  const navigate=useNavigate()


  const renderError = useCallback((error) => (
    <div className='text-red-500'>{error}</div>
  ), []);

  const onSubmit = useCallback( async(data) => {
 
    

    try{
      let user;
      if(!isSignIn){
        await removeToken()
        user=  await registerUser(data.email,data.password)
   
        setIsSignIn(!isSignIn)


      
      }
      else{
         user=await loginUser(data.email,data.password)
     
        dispatch(setAuthToken(user.accessToken))
        navigate("/")


      }
      setError(null)
      dispatch(setAuthToken(user.accessToken))
      dispatch(setUser(user))
      reset()

    }
  catch(error)  {
          
           const errorCode = error.code;
            let errMsg = error.message; 
            if (errorCode === "auth/email-already-in-use") {
               errMsg = "Email already registered. Please sign in.";
               } 
               else if (errorCode === "auth/user-not-found") { 
                errMsg = "User not found. Please sign up."; 
              } else if (errorCode === "auth/invalid-credential") { 
                errMsg = "Incorrect password. Please try again."; }
                 setError({ state: true, error: errorCode, message: errMsg }); }
             
            
  }, [isSignIn,reset]);

  const toggleSignInForm = useCallback(() => {
    setIsSignIn(!isSignIn);
  }, [isSignIn]);

  useEffect(() => {
    // Handle side effects here if needed
  }, [error]);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover w-screen bg-opacity-90" src={FORM_BACKGROUND_IMG} alt="background" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        {error?.state && (
          <div className="bg-yellow-600 rounded-r-md p-3">
            <h1 className='text-black text-lg font-bold'>{error.message}</h1>
          </div>
        )}
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign in" : "Sign up"}</h1>
        {!isSignIn && (
          <>
            <input
              className="p-4 my-4 sm:p-2 sm:my-2 w-full bg-gray-700 text-white"
              placeholder='Full Name'
              {...register("fullName", {
                required: "This field is required",
                maxLength: {
                  value: 20,
                  message: "Full name cannot exceed 20 characters"
                },
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Alphabetical characters only"
                }
              })}
            />
            {errors.fullName && renderError(errors.fullName.message)}
          </>
        )}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/i,
              message: "Please enter a valid email"
            }
          })}
          className="p-4 my-4 sm:p-2 sm:my-2 w-full bg-gray-700 text-white"
          placeholder="Email"
        />
        {errors.email && renderError(errors.email.message)}
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
              message: !isSignIn ? "Please provide vaild password ":"Please provide a strong password"
            }
          })}
          className="p-4 my-4 sm:p-2 sm:my-2 w-full bg-gray-700"
          type="password"
          placeholder="Password"
        />
        {errors.password && renderError(errors.password.message)}
        <input
          className='p-4 my-6 sm:p-2 sm:my-4 bg-red-700 w-full rounded-lg cursor-pointer'
          type="submit"
        />
        <h2>{isSignIn ? "New to Netflix?" : "Already registered?"} <b onClick={toggleSignInForm}>{isSignIn ? "Sign Up now." : "Sign In"}</b></h2>
      </form>
    </div>
  );
}

export default Login;
