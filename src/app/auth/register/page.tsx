'use client'
import Head from 'next/head';
import Nav_Bar from '@/app/components/navbar';
import Image from 'next/image';
import {Input} from "@nextui-org/input";
import Dashboard from '../../../../public/registerdashboard.png';
import GoogleIcon  from "../icons/GoogleIcon";
import {EyeFilledIcon} from "../icons/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../icons/EyeSlashFilledIcon";
import React from 'react';

import {Button} from "@nextui-org/button";
import Footer from '@/app/components/footer';

export default function Register() {
  
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  
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

            <Input isClearable isRequired  className='w-full' type="text" label="Full Name" />
            <br></br>
            <Input isClearable isRequired  className='w-full' type="email" label="Email" />
            <br></br>
            <Input isClearable  className='w-full' type="tel" label="Phone Number" />
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
            type={isVisible ? "text" : "Password"}
            />
            <br></br>
            <Button size="lg" radius="md" variant="faded" className='w-full bg-signup-button pt-2 pb-2'>Register</Button>
            <br></br>
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="mx-4 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <br></br>
            <Button  variant="solid" size="lg" className='w-full bg-register-google-button'  startContent={<GoogleIcon/>}>
              Register with Google 
            </Button>
            
            <br></br>
            <div className='w-full text-center'>
              <p className='text-white'>Already have an account?  <span className='text-light-blue-x cursor-pointer hover:text-white'>Login Here</span> </p>
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
