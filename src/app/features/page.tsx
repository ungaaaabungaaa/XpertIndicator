import Head from 'next/head';
import Nav_Bar from '../components/navbar';
import Footer from '../components/footer';
import { Chip } from '@nextui-org/chip';
import Image from 'next/image';
import feature1 from '../../../public/feature1.webp'
import feature2 from '../../../public/feature2.webp'
import feature3 from '../../../public/feature3.webp'
import feature4 from '../../../public/feature4.webp'
import feature5 from '../../../public/feature6.webp'
import { TypewriterEffectSmoothDemo } from '../components/typewriter-effect';

export default function Features() {
  return (
    <>
      <Head>
        <title>Features</title>
      </Head>
      <Nav_Bar></Nav_Bar>
      <br></br>
       <div className="w-100 p-6 flex items-center justify-center flex-col">
          
          
          <TypewriterEffectSmoothDemo></TypewriterEffectSmoothDemo>
          
          
          <br></br>
          <Chip>Best Features</Chip>
          <br></br>
          <h1 className="text-white text-2xl font-semibold text-center">
          Simplify Trading Profits
          </h1>
          <p className="text-white text-center">
          Helps users make informed decisions based on the most up-to-date information, minimizing the risk of trading errors.
          </p>
          <br></br>


          <div className='w-full flex flex-col md:flex-row p-2 md:p-6'>
            <div className='w-full md:w-50 p-2 md:p-6'>
              
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
            </div>
            <div className='w-full md:w-50 p-2 md:p-6'>
              <br></br>
              <br></br>
              <h1 className='text-white text-2xl'>Real-Time Data Analysis</h1>
              <p className='text-white'>Offers real-time market data analysis, providing traders with accurate insights on price movements, trends, & market fluctuations</p>
              <br></br>
              <br></br>
            </div>
          </div>

          <div className='w-full flex flex-col md:flex-row-reverse p-2 md:p-6'>
            <div className='w-full md:w-50 p-2 md:p-6'>
              
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
            </div>
            <div className='w-full md:w-50 p-2 md:p-6'>
              <br></br>
              <br></br>
              <h1 className='text-white text-2xl'>Customizable Alerts & Notifications</h1>
              <p className='text-white'>Users can set personalized alerts based on specific price levels, technical indicators, or market conditions.</p>
              <br></br>
              <br></br>
            </div>
          </div>




          <div className='w-full flex flex-col md:flex-row p-2 md:p-6'>
            <div className='w-full md:w-50 p-2 md:p-6'>
              
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
            </div>
            <div className='w-full md:w-50 p-2 md:p-6'>
              <br></br>
              <br></br>
              <h1 className='text-white text-2xl'>Multi-Timeframe Analysis</h1>
              <p className='text-white'>The indicator supports analysis across multiple timeframes, helping users track both short-term and long-term trends effectively</p>
              <br></br>
              <br></br>
            </div>
          </div>


          <div className='w-full flex flex-col md:flex-row-reverse p-2 md:p-6'>
            <div className='w-full md:w-50 p-2 md:p-6'>
              
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={feature4}
                width={370}
                height={250} // Fixed height for the image
                style={{
                  objectFit: 'cover', // Ensure the image covers the space without distortion
                  borderRadius: '10px', // Optional: for rounded corners
                  marginBottom: '10px', // Add small space below the image to prevent tightness
                }}
              />
            </div>
            <div className='w-full md:w-50 p-2 md:p-6'>
              <br></br>
              <br></br>
              <h1 className='text-white text-2xl'>Advanced Technical Indicators Integration</h1>
              <p className='text-white'>Incorporates a variety of widely used technical indicators such as Moving Averages, RSI, MACD, and Bollinger Bands</p>
              <br></br>
              <br></br>
            </div>
          </div>






          <div className='w-full flex flex-col md:flex-row p-2 md:p-6'>
            <div className='w-full md:w-50 p-2 md:p-6'>
              
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={feature5}
                width={370}
                height={250} // Fixed height for the image
                style={{
                  objectFit: 'cover', // Ensure the image covers the space without distortion
                  borderRadius: '10px', // Optional: for rounded corners
                  marginBottom: '10px', // Add small space below the image to prevent tightness
                }}
              />
            </div>
            <div className='w-full md:w-50 p-2 md:p-6'>
              <br></br>
              <br></br>
              <h1 className='text-white text-2xl'>User-Friendly Interface</h1>
              <p className='text-white'>The indicator comes with an intuitive and easy-to-navigate interface, making it accessible for both beginner and experienced traders.</p>
              <br></br>
              <br></br>
            </div>
          </div>
              
        </div>
      
      <Footer></Footer>
      
    </>
  );
}
