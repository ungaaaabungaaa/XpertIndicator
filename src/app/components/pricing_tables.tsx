import { Check } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Card ,CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";


export default function Pricing_Tables() {
  return (
    <>
    <div className=" text-white p-4 md:p-8 bg-pricing-layout">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
          {/* Header Section */}
          <div className="lg:w-1/3 space-y-4 mb-8 lg:mb-0">
            <br></br>
            <br></br>
            <Chip>Pricing Plan</Chip>
            <br></br>
            <h1 className="text-white text-2xl "> Choose the Perfect Plan <br />
            for Your Trading Needs</h1>
            <p className="text-gray-400">
              Explore our flexible pricing options & find the one that best suits your Trading needs.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            {/* Free Tier */}
            <Card className="bg-pricing-card border-gray-800">
              <CardBody className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2  text-white">Free</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold  text-white">14 Days</span>
                    <span className="text-gray-400">/Free</span>
                  </div>
                  <p className="text-gray-400 mt-3">
                    Beginners looking to get started with Xpertindicator
                  </p>
                </div>

                <Button className="w-full bg-signup-button">
                  Join Telegram | WhatsApp
                </Button>

                <div className="space-y-4">
                  <div className="text-sm text-gray-400 uppercase">What you will get</div>
                  <ul className="space-y-3 text-white">
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Real-time 5 Trades Daily</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Basic Signals for up to 12 Days</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Price alerts for up to 5 cryptocurrencies</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Access to Telegram & WhatsApp Groups</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Basic Setup Guide</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Email support</span>
                    </li>
                  </ul>
                </div>
              </CardBody>
            </Card>

            {/* Lifetime Tier */}
            <Card className="bg-pricing-card border-gray-800">
              <CardBody className="p-6 space-y-6">
                <div>
                  <h2 className="text-xl text-white font-semibold mb-2">LifeTime</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold  text-white">₹2999</span>
                    <span className="text-gray-400">/Only</span>
                  </div>
                  <p className="text-gray-400 mt-3">
                    users & investors requiring Full Access to Xpertindicator
                  </p>
                </div>

                <Button className="w-full bg-signup-button">
                  Buy Now
                </Button>

                <div className="space-y-4">
                  <div className="text-sm text-gray-400 uppercase">What you will get</div>
                  <ul className="space-y-3 text-white">
                    <li className="flex gap-3 ">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>All features of the Free Plan</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Professional-grade Signals Unlimited</span>
                    </li>
                    <li className="flex gap-3">
                      <Check className="h-5 w-5 text-teal-500 shrink-0" />
                      <span>Source Code For the Plugin</span>
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