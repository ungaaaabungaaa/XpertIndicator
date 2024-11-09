'use client'
import Head from 'next/head';
import Nav_Bar from '@/app/components/navbar';
import Image from 'next/image';
import {Input} from "@nextui-org/input";
import Dashboard from '../../../../public/registerdashboard.webp';
import GoogleIcon  from "../icons/GoogleIcon";
import {EyeFilledIcon} from "../icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../icons/EyeSlashFilledIcon";
import React from 'react';
import { useState, ChangeEvent } from 'react';

import {Button} from "@nextui-org/button";
import Footer from '@/app/components/footer';
import { useRouter } from 'next/navigation'
import { auth } from '../../config/firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";

import toast from 'react-hot-toast';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  auth?: string;
}


function Toast(message:string) {
  toast.success(message); // Displays a success message
};

export default function Register() {
  
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

   // Handle input changes
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'fullName') setFullName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'password') setPassword(value);
  };


  // Register the user
  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      console.log('Please fill in all required fields: Full Name, Email, and Password');
      Toast(`Please fill in all required fields: Full Name, Email, and Password`);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      Toast(`User registered Welcome 🎉`);
      router.push('/');
    } catch (error: any) {
      console.error('Error registering user:', error.message);
      Toast(`Error registering user: ${ error.message}`);
    }
  };

  
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Nav_Bar></Nav_Bar>
      <div className='flex items-center justify-center flex-col-reverse lg:flex-row w-full bg-image-register'>
        <div className='w-full h-full lg:w-1/2 lg:h-full pt-5 pb-5 lg:w-1/2 lg:h-full pl-4 lg:pl-8'>
        {/* Image */}

        <Image className="w-5/6" src={Dashboard} alt="XpertIndicator Logo"/>

        <h1 className='text-white text-2xl font-semibold'>Start Your Profits Here ✨</h1>
        <p className='text-white'>Empower your trades with precision insights, optimize performance, and make data-driven decisions confidently.</p>

           
        </div>
        <div className='w-full h-full pt-5 pb-5 lg:w-1/2 lg:h-full pl-4 lg:pl-8 bg-black-register-form'>
        {/* Register Form */}

        <div>
          <div className='w-100 h-100 p-6 flex  items-start  justify-center flex-col md:p-20 lg:p-28 '>
            
            <h1 className='text-white text-2xl font-semibold'>Register</h1>
            <p className='text-grey'>Let’s create new account</p>
            <br></br>

            <Input isClearable isRequired  className='w-full'  type="text" label="Full Name"  value={fullName} name="fullName" onChange={handleChange} />
            <br></br>
            <Input isClearable isRequired  className='w-full' type="email" label="Email" value={email}  name="email" onChange={handleChange} />
            <br></br>
            <Input isClearable  className='w-full' type="tel" label="Phone Number" value={phone} name="phone"  onChange={handleChange} />
            <br></br>
            <Input isRequired  className='w-full'  label="Password"  value={password} name="password" onChange={handleChange}
            endContent={
              <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "Password"}
            />
            <br></br>
            <Button size="lg" onClick={handleRegister} radius="md" variant="faded" className='w-full bg-signup-button pt-2 pb-2'>Register</Button>
            <br></br>
  
            <div className='w-full text-center'>
              <p className='text-white'>Already have an account?  <span onClick={() => router.push('/auth/login')} className='text-light-blue-x cursor-pointer hover:text-white'>Login Here</span> </p>
            </div>
          </div>
        </div>
        
        </div>

      </div>

      <br></br>
      <Footer></Footer>
     


     
    </>
  );
}
