'use client'

import Head from 'next/head';
import Nav_Bar from '@/app/components/navbar';
import Image from 'next/image';
import Dashboard from '../../../../public/login-dashboard.webp';
import {Input} from "@nextui-org/input";
import {EyeFilledIcon} from "../icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../icons/EyeSlashFilledIcon";
import React, { use } from 'react';
import {Button} from "@nextui-org/button";
import GoogleIcon  from "../icons/GoogleIcon";
import Footer from '@/app/components/footer';
import { useRouter } from 'next/navigation'

import { auth } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';


function Toast(message:string) {
  toast.success(message); // Displays a success message
};




export default function Login() {


  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  function handleLogin(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in as:", user.email);
        Toast(`Logged in as: ${user.email}`);
        router.push('/');
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        Toast(`Logged in as: ${error.message}`);
      });
  }

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Logged in with Google as:", user.email);
        Toast(`Logged in with Google as: ${user.email}`);
        router.push('/');
      })
      .catch((error) => {
        console.error("Google login failed:", error.message);
        Toast(`Google login failed: ${error.message}`);
      });
  }

 


  
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Nav_Bar></Nav_Bar>
    
      <div className='flex items-center justify-center flex-col lg:flex-row w-full'>
        <div className='w-full h-full lg:w-1/2 lg:h-full pt-5 pb-5'>
        <div>
          <div className='w-100 h-100 p-6 flex  items-start  justify-center flex-col md:p-20 lg:p-28'>
            
            <h1 className='text-white text-2xl font-semibold'>Login </h1>
            <p className='text-grey'>Let’s login into your account first</p>
            <br></br>
            <Input isClearable isRequired  className='w-full' type="email" label="Email" onChange={(e) => setEmail(e.target.value)} />
            <br></br>
            <Input isRequired  className='w-full'  label="Password"
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <Button onClick={() => handleLogin(email, password)} size="lg" radius="md" variant="faded"  className='w-full bg-signup-button pt-2 pb-2'>Login</Button>
            <p className='text-light-blue-x mt-2 mb-2 hover:text-white'>Forgot Password ?</p>
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <br></br>
            <Button  variant="solid" size="lg" className='w-full bg-register-google-button'  startContent={<GoogleIcon/>} onClick={handleGoogleLogin}>Login with Google </Button>
            <br></br>
            <div className='w-full text-center'>
              <p className='text-white'>Don’t have an account? <span onClick={() => router.push('/auth/register')}  className='text-light-blue-x cursor-pointer hover:text-white'>Register</span> </p>
            </div>
          </div>
        </div>
        <br></br>
        </div>
        <div className='bg-purple-login w-full h-full pt-5 pb-5 lg:w-1/2 lg:h-full pl-4 lg:pl-8'>
          <h1 className='text-white text-2xl font-semibold'>Start Your Profits Here ✨</h1>
          <p className='text-white'>Empower your trades with precision insights, optimize performance, and make data-driven decisions confidently.</p>
          <br></br>
          <Image className="" src={Dashboard} alt="XpertIndicator Logo"/>
        </div>
      </div>

      <br></br>
      <Footer></Footer>

    </>
  );
}
