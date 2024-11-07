import Head from 'next/head';
import Nav_Bar from '../components/navbar';
import Footer from '../components/footer';
import { Chip } from '@nextui-org/chip';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Condition</title>
      </Head>
      <Nav_Bar></Nav_Bar>
      <br></br>
       <div className="w-100 p-6 lg:p-24 flex items-start justify-start flex-col text-white text-start">
          <br></br>
          <Chip>Terms</Chip>
          <br></br>
          <h1 className="text-white text-2xl font-semibold text-center">
          Terms & Condition
          </h1>
          <br></br>
          <p className='text-white'><strong className='text-purple-x '>Effective Date:</strong> [Nov 2024]</p>
          <br></br>
          <p  className='text-white'>Welcome to <strong>XpertIndicator</strong>! By purchasing any product from our website, you agree to the following Terms and Conditions. Please read them carefully.</p>
          <br></br>
          <h2  className='text-white text-2xl '>1. General Information</h2>
          <p  className='text-white'>XpertIndicator provides trading indicators for use on <strong>TradingView</strong>, along with educational materials (such as books and YouTube videos) to help you use the indicators effectively and profitably. By accessing or purchasing our products, you agree to be bound by these terms.</p>
          <br></br>
          <h2  className='text-white text-2xl'>2. Purchase and Delivery</h2>
          <ul  className='text-white'>
            <li><strong>Product:</strong> Upon purchasing a trading indicator from our website, you will receive the indicator's installation link for <strong>TradingView</strong>, along with a free downloadable book and access to exclusive YouTube videos that explain how to use the indicator and optimize profits.</li>
            <li><strong>Delivery:</strong> After your purchase is confirmed, the product will be delivered to the email address associated with your account. You will receive an email with the link to access the indicator and additional resources within 24 hours.</li>
          </ul>
          <br></br>
          <h2  className='text-white text-2xl'>3. Refund Policy</h2>
          <ul>
            <li>We offer a <strong>14-day refund policy</strong> on all purchases. If you are not satisfied with the indicator, you can request a full refund within 14 days from the date of purchase.</li>
            <li><strong>Conditions for Refund:</strong></li>
            <ul>
              <li>You must provide proof that you have tried to use the indicator, such as screenshots or descriptions of your experience.</li>
              <li>The refund request must be made through the email address associated with your purchase.</li>
            </ul>
            <li>Refunds will not be issued if the product has been used in a manner inconsistent with its intended purpose or if the product was used for more than 14 days.</li>
          </ul>
          <br></br>
          <h2 className='text-2xl'>4. Usage Rights</h2>
          <ul>
            <li>Upon purchasing the indicator, you are granted a <strong>non-transferable, non-exclusive license</strong> to use the product for personal trading purposes on <strong>TradingView</strong>.</li>
            <li>You may not resell, redistribute, or modify the product in any form without prior written consent from XpertIndicator.</li>
          </ul>
          <br></br>
          <h2 className='text-2xl'>5. Intellectual Property</h2>
          <ul>
            <li>All content provided by XpertIndicator, including but not limited to the trading indicators, books, educational videos, and website materials, is the intellectual property of <strong>XpertIndicator</strong>.</li>
            <li>You may not use, reproduce, or distribute any of our intellectual property without explicit permission from the company.</li>
          </ul>
          <br></br>
          <h2 className='text-2xl'>6. Disclaimer</h2>
          <ul>
            <li><strong>No Guarantees of Profit:</strong> While our indicators are designed to provide insights and assist with trading decisions, there are no guarantees that using them will result in profits. Trading involves risk, and you should never trade with money you cannot afford to lose.</li>
            <li><strong>No Liability:</strong> XpertIndicator is not liable for any losses, damages, or financial consequences resulting from the use of our products or educational materials. All trades are executed at your own risk.</li>
          </ul>
          <br></br>
          <h2 className='text-2xl'>7. Support</h2>
          <p>If you have any questions or require support, please contact us at <strong>[Insert support email]</strong>. We strive to assist you as quickly as possible.</p>
          <br></br>
          <h2 className='text-2xl'>8. Amendments</h2>
          <p>XpertIndicator reserves the right to modify these Terms and Conditions at any time. Any changes will be posted on this page with the updated date. It is your responsibility to review these Terms regularly.</p>
          <br></br>
          <h2 className='text-2xl'>9. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of <strong>[Insert your country/state]</strong>. Any disputes arising out of or in connection with these terms shall be resolved in the courts of <strong>[Insert location]</strong>.</p>
          <br></br>
          <p>By purchasing from XpertIndicator, you acknowledge and agree to the terms outlined above.</p>
          </div>
          <div>
        </div>
      
      <Footer></Footer>
      
    </>
  );
}
