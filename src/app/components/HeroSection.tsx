import React from "react";
import {Button} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import FadeInImage from "./fade-in-image";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export default function HeroSection() {
  return (
    <div className="relative flex h-dvh w-full flex-col overflow-hidden bg-contact-hero-home">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        
        <br className="hidden lg:block"></br>
        <br className="hidden lg:block"></br>
        <br className="hidden lg:block"></br>
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500"
            endContent={
              <Icon
                className="flex-none outline-none [&>path]:stroke-[2]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered"
          >
            One Click CopyTrading
          </Button>
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="text-white">
              Easiest way to <br /> Making Profits.
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
            HappyMo.Club makes Making Profits simple. Indicator, Books, Videos,
            & more To Make Your Trading 100X.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              className="h-10 w-[163px]  px-[16px] py-[10px] text-small font-medium leading-5 text-black bg-white"
              radius="full"
            >
              40X Start Now
            </Button>
            <Button
              className="h-10 w-[163px] border-1 border-white border-default-100 px-[16px] py-[10px] text-small font-medium leading-5 text-white"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full text-white">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5] text-white"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              radius="full"
              variant="bordered"
            >
              AI Indicator
            </Button>
          </div>
        </section>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          <FadeInImage
            fill
            priority
            alt="Gradient background"
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
          />
        </div>
        <br></br>
        <HeroVideoDialog 
            className="w-full lg:w-3/4 border-none bg-black" 
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb" 
            thumbnailSrc="/home.webp" 
        />
      </main>
    </div>
  );
}
