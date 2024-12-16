'use client'
import { Chip } from "@nextui-org/chip";
import {Button} from "@nextui-org/button";
import { useRouter } from 'next/navigation'

export default function CTA() {
    const router = useRouter();
    return (
      <>
      <br></br>
      <br />
      <div className="w-full p-4 md:p-14 lg:p-24">
      <div className="w-full flex flex-col items-center justify-center p-6  lg:p-24 rounded-3xl cta-bg-lg">
            <br></br>
            <br />
            <Chip>Get Started</Chip>
            <br />
            <h1 className="text-white text-2xl text-center">Maximize Your Trading Potential</h1>
            <p className="text-white text-center">Join instant to our Copy Trading Platform. Track your Profits Daily, Win Daily <br></br> & make informed decisions— 40x Challenge.</p>
            <br></br>
            <br></br>
            <Button size="md" radius="md"  href="https://i.bybit.com/269r1abS?action=inviteToCopy" variant="faded" className='cta-button pt-2 pb-2'>Get Started</Button>
            <br></br>
            <br></br>
      </div>
      </div>
      <br></br>
      <br></br>
    </>
    );
  }