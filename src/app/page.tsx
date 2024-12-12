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
import HeroSection from './components/HeroSection'
import { WorldMapDemo } from './components/world-map'
import { AppleCardsCarouselDemo } from './components/apple-cards-carousel'


export default function Home() {
  return (
    <>
    <Nav_Bar></Nav_Bar>
    <HeroSection></HeroSection>
    <div className="w-full p-6 flex justify-center items-center flex-col text-center">
      <br></br>
      <br></br>
      <Chip>40X Challenge</Chip>
      <br></br>
      <h1 className='text-white text-2xl'>1% Profit EveryDay <br></br> Start Now & Stop Anytime</h1>
      <br></br>
      <p className='text-white'>monthly profits with no hidden fees or upfront charges. <br></br> Join a community of smart traders & experience the power of disciplined investing </p>
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
        <h1 className='text-white text-2xl text-start'>Why Choose the 40x Challenge?</h1>
        <br></br>
        <p className='text-white text-start'>Start your journey toward consistent profits with the 40x Challenge! Our goal is simple: 1% monthly profits with no hidden fees or upfront charges. Join a community of smart traders and experience the power of disciplined investing</p>
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

          <h1 className='text-white text-2xl text-start'>How It Works ?</h1>
          <br></br>
          <p className='text-white text-start'>1. Open your account & fund it <br></br>2. Sit back & let our proven strategies work for you. <br></br>3. Track your performance & enjoy stress-free trading.</p>
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

        <h1 className='text-white text-2xl text-start'>Risk-Free, Hassle-Free</h1>
        <br></br>
        <p className='text-white text-start'>Your funds stay in your account. <br></br> Designed for steady growth over time. <br></br> You keep 100% of your profits</p>


        </div>
      </div>
    </div>

    <br></br>
    <Best_Tools></Best_Tools>
   
   
    <br></br>
    <Pricing_Tables></Pricing_Tables>
    <br></br>
    <CTA></CTA>

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
  
     <HeroScrollDemo></HeroScrollDemo>
     <FAQ></FAQ>
     <br></br>
     <Footer></Footer>
   
   
    
    </>
  )
}
