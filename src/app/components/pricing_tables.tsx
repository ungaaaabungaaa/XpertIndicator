'use client'
import { Check } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card ,CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { useRouter } from 'next/navigation'



export default function Pricing_Tables() {
  const router = useRouter();
  return (
    <>
    <div className=" text-white p-4 md:p-8 bg-pricing-layout">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          {/* Header Section */}
          <div className="lg:w-1/3 space-y-4 mb-8 lg:mb-0">
            <br></br>
            <br></br>
            <Chip>Pick Your Poision</Chip>
            <br></br>
            <h1 className="text-white text-2xl "> Choose the Perfect Thing <br />
            for Your Trading Needs</h1>
            <p className="text-gray-400">
              Discover the power of our One-Click Copy Trading with the 40X Challenge, or elevate your trading strategy with our advanced AI Trading Indicator—designed to meet all your trading needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <Card className="bg-pricing-card border-gray-800">
              <CardBody className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2  text-white">40x Challenge</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold  text-white">1% Daily</span>
                    <span className="text-gray-400">/Free</span>
                  </div>
                  <p className="text-gray-400 mt-3">
                   Grow your wealth effortlessly with the 40x Challenge — 1% monthly profit, no fees, just copy and trade!
                  </p>
                </div>

                <Button className="w-full bg-signup-button">
                  Start Now 40x
                </Button>

                <div className="space-y-4">
                  <div className="text-sm text-gray-400 uppercase">What you will get</div>
                  <ul className="space-y-3 text-white">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>1% Profit Goal Daily</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>No Fees or Commissions</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Copy Professional Trader</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Full Control Over Your Funds</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Transparent Performance Tracking</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>

            {/* Lifetime Tier */}
            <Card className="bg-pricing-card border-gray-800">
              <CardBody className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl text-white font-semibold mb-2">AI Indicator</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold  text-white">$29.00</span>
                    <span className="text-gray-400">/Only</span>
                  </div>
                  <p className="text-gray-400 mt-3">
                    Full Access With API Keys For Our AI INDICATOR
                  </p>
                </div>

                <Button onClick={() => router.push('/checkout')} className="w-full bg-signup-button">
                  Buy Now
                </Button>

                <div className="space-y-4">
                  <div className="text-sm text-gray-400 uppercase">What you will get</div>
                  <ul className="space-y-3 text-white">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Professional-grade Signals Unlimited</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>API DOCS For the Plugin</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Unlimited price alerts & advanced alert</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>market reports and investment recommendations</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Email Support</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}