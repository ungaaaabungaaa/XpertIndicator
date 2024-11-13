"use client";
import React from "react";
import {ContainerScroll} from "@/components/ui/container-scroll-animation"
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                XpertIndicator
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/home.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl bg-black object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
