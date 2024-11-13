import Nav_Bar from '../app/components/navbar'
import FAQ from './components/faq'
import CTA from './components/cta'
import Footer from './components/footer'
import HeroVideoDialog from '@/components/ui/hero-video-dialog'
import { Chip } from '@nextui-org/chip'
import Image from 'next/image';
import feature1 from '../../public/feature1.webp';
import feature2 from '../../public/feature2.webp';
import feature3 from '../../public/feature3.webp';
import Best_Tools from './components/best_tools';
import Pricing_Tables from './components/pricing_tables';
import { Test_Demo } from './components/test_demo';
import { HeroScrollDemo } from './components/HeroScrollDemo';


export default function Home() {
  return (
    <>
    <Nav_Bar></Nav_Bar>

    <div className="w-full p-6 flex justify-center items-center flex-col bg-contact-hero-home text-center">
      <br></br>
      <br></br>
      <Chip>New: Our AI Plugin just landed</Chip>
      <br></br>
      <h1 className='text-white text-2xl md:text-5xl font-semibold'>Trading Simplified</h1>
      <br></br>
      <p className='text-white'>Comprehensive TradingView Plugin for In-depth Analysis & Profit Making</p>
      <br></br>
      <br></br>
      <HeroVideoDialog 
        className="w-full lg:w-3/4 border-none bg-black" 
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb" 
        thumbnailSrc="/home.webp" 
      />
    </div>

    <div className="w-full p-6 flex justify-center items-center flex-col text-center">
      <br></br>
      <br></br>
      <Chip>Features</Chip>
      <br></br>
      <h1 className='text-white text-2xl'>Unlock the Power of XpertIndicator with TradingView</h1>
      <br></br>
      <p className='text-white'>Transform your Trades & investments with our Indicator that brings all the tools you need under one roof. </p>
      <br></br>
      <div className='w-full p-6 lg:p-12 flex items-center justify-center flex-col lg:flex-row gap-4'>
        <div className='w-full lg:w-3/12 '>

         <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={feature1}
            width={370}
            height={250} // Fixed height for the image
            style={{
                  objectFit: 'cover', // Ensure the image covers the space without distortion
                  borderRadius: '10px', // Optional: for rounded corners
                  marginBottom: '10px', // Add small space below the image to prevent tightness
            }}
          />

        <br></br>
        <h1 className='text-white text-2xl'>Real-Time Data Analysis</h1>
        <br></br>
        <p className='text-white'>Offers real-time market data analysis, providing traders with accurate insights on price movements, trends, and market fluctuations</p>
        </div>
        <div className='w-full lg:w-3/12 '>

          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={feature2}
            width={370}
            height={250} // Fixed height for the image
            style={{
                  objectFit: 'cover', // Ensure the image covers the space without distortion
                  borderRadius: '10px', // Optional: for rounded corners
                  marginBottom: '10px', // Add small space below the image to prevent tightness
            }}
          />
          <br></br>

          <h1 className='text-white text-2xl'>Multi-Timeframe Analysis</h1>
          <br></br>
          <p className='text-white'>The indicator supports analysis across multiple timeframes, helping users track both short-term and long-term trends effectively</p>
        </div>
        <div className='w-full lg:w-3/12'>
        <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={feature3}
            width={370}
            height={250} // Fixed height for the image
            style={{
                  objectFit: 'cover', // Ensure the image covers the space without distortion
                  borderRadius: '10px', // Optional: for rounded corners
                  marginBottom: '10px', // Add small space below the image to prevent tightness
            }}
          />
          <br></br>

        <h1 className='text-white text-2xl'>Customizable Alerts & Notifications</h1>
        <br></br>
        <p className='text-white'>Users can set personalized alerts based on specific price levels, technical indicators, or market conditions.</p>


        </div>
      </div>
    </div>

    <br></br>
    <Best_Tools></Best_Tools>
   
   
    <br></br>
    <Pricing_Tables></Pricing_Tables>
    <br></br>
    

    <div className="w-full p-6 flex justify-center items-center flex-col">
      <br></br>
      <Chip>Testimonails</Chip>
      <br></br>
      <h1 className='text-white text-2xl md:text-5xl font-semibold'>Our  Reivews</h1>
      <br></br>
      <p className='text-white'>Checkout Our Reviews On Google Too & Some Here As Well</p>
      <br></br>
      <Test_Demo></Test_Demo>
      
    </div>
   
     <CTA></CTA>
     <FAQ></FAQ>
     <HeroScrollDemo></HeroScrollDemo>
     <br></br>
     <br></br>
     <Footer></Footer>
   
   
    
    </>
  )
}
