'use client'
import Head from 'next/head';
import Footer from '../components/footer';
import Nav_Bar from '../components/navbar';
import { Chip } from '@nextui-org/chip';
import { CheckCircle2, CreditCard, Lock, Shield, Zap } from "lucide-react";
import { Input, Textarea } from '@nextui-org/input';
import { Separator } from "@/components/ui/separator"
import { Button } from '@nextui-org/button';
import Checkout_Card from '../components/checkout_card';



export default function CheckOut() {

  return (
    <>
      <Head>
        <title>CheckOut</title>
      </Head>
      <Nav_Bar />
      <div className="w-100 p-6 flex items-center justify-center flex-col">
       

        <div className="w-full flex flex-col md:flex-row-reverse  p-2 md:p-6">
          
        <div className="w-full md:w-50 p-2 md:p-6">
            <h1 className='text-white text-2xl font-semibold'>Checkout Form </h1>
            <p className='text-grey'> Complete your purchase and unlock the power of XpertIndicator.</p>
            <br></br>
            <Input isClearable isRequired  className='w-full' type="text" label="Full Name" />
            <br></br>
            <Input isClearable isRequired  className='w-full' type="email" label="Email" />
            <br></br>
            <Textarea
                  label="Address..."
                  className="w-full"
            />
            <br></br>
            <Input isClearable isRequired  className='w-full' type="text" label="Country" />
            <br></br>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Order Summary</h4>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">XpertIndicator Lifetime Access</span>
                  <span className="font-medium text-white" >₹3,748</span>
                </div>
                <div className="flex justify-between text-sm text-indigo-400">
                  <span className='text-white'>Discount (20%)</span>
                  <span className='text-white'>-₹251.00</span>
                </div>
                <Separator className="my-2 bg-zinc-800" />
                <div className="flex justify-between text-sm font-semibold">
                  <span className='text-white'>Total</span>
                  <span className='text-white'>₹2,999</span>
                </div>
              </div>

              <br></br>
              <Button size="lg" radius="md" variant="faded"
              className="w-full bg-signup-button pt-2 pb-2">
              
                <span className="flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4" /> Pay Securely ₹2,999
                </span>
          
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <Shield className="h-4 w-4" />
              <span>Your payment is secured with 256-bit encryption</span>
            </div>


            </div>


          </div>
          
          <div className="w-full md:w-50 p-2 md:p-6">

           
            <br></br>

            <p className="text-white space-y-2">
              Gain lifetime access to XpertIndicator, the ultimate tool for precision trading insights and data-driven decision making.
            </p>
            <br></br>
            <Checkout_Card></Checkout_Card>
            <br></br>
            <div className="space-y-2">
              <h4 className="text-md font-semibold text-white">Key Features</h4>
              <ul className="space-y-1 text-sm">
                {["Real-time market analysis", "Custom indicators", "AI-powered predictions", "Unlimited data access"].map(
                  (feature) => (
                    <li key={feature} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-indigo-500" />
                      {feature}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-md font-semibold">What&apos;s Included</h4>
              <ul className="space-y-1 text-sm text-zinc-300">
                <li>• Lifetime software updates</li>
                <li>• 24/7 priority support</li>
                <li>• Exclusive webinars and educational content</li>
                <li>• API access for custom integrations</li>
              </ul>
            </div>

            <div className="p-3 bg-indigo-900/30 rounded-lg mt-4">
              <p className="text-sm text-indigo-300 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Limited time offer: 20% discount applied</span>
              </p>
            </div>
          </div>



          
        </div>
      </div>

      <Footer />
    </>
  );
}
