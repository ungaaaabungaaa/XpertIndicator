import Head from 'next/head';
import Nav_Bar from '../components/navbar';
import Footer from '../components/footer';
import { Chip } from '@nextui-org/chip';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Nav_Bar></Nav_Bar>
      <br></br>
      <div className="w-100 p-6 lg:p-24 flex items-start justify-start flex-col text-white text-start">
        <br></br>
        <Chip>Privacy</Chip>
        <br></br>
        <h1 className="text-white text-2xl font-semibold text-center">
          Privacy Policy
        </h1>
        <br></br>
        <p className='text-white'><strong className='text-purple-x '>Effective Date:</strong> [Nov 2024]</p>
        <br></br>
        <p className='text-white'>
          At <strong>XpertIndicator</strong>, we value your privacy. This Privacy Policy outlines the types of personal information we collect, how it is used, and the steps we take to protect your information when you visit our website and purchase our products.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>1. Information We Collect</h2>
        <p className='text-white'>
          We collect personal information that you provide to us when you purchase products, sign up for our newsletter, or contact us for support. This information may include:
        </p>
        <ul className='text-white'>
          <li>Name</li>
          <li>Email address</li>
          <li>Billing information</li>
          <li>Purchase history</li>
          <li>Any other information you voluntarily provide to us</li>
        </ul>
        <br></br>
        <h2 className='text-white text-2xl'>2. How We Use Your Information</h2>
        <ul className='text-white'>
          <li>To process your purchases and deliver products.</li>
          <li>To send you important updates related to your account or transactions.</li>
          <li>To offer customer support and address any issues you may have.</li>
          <li>To improve our products, services, and website based on your feedback.</li>
          <li>To send promotional emails or newsletters, if you have opted in.</li>
        </ul>
        <br></br>
        <h2 className='text-white text-2xl'>3. Cookies and Tracking Technologies</h2>
        <p className='text-white'>
          We use cookies and other tracking technologies to enhance your experience on our website. Cookies help us remember your preferences and improve the functionality of our website. You can disable cookies through your browser settings, but this may affect your ability to use certain features of our site.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>4. Third-Party Services</h2>
        <p className='text-white'>
          We do not share your personal information with third-party vendors for marketing purposes. However, we may use third-party services to process payments, manage email subscriptions, and improve the functionality of our website. These third parties have access to your information only to the extent necessary to perform their services.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>5. Data Security</h2>
        <p className='text-white'>
          We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please be aware that no method of data transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>6. Your Rights</h2>
        <p className='text-white'>
          You have the right to access, update, or delete the personal information we have on file. If you wish to review, correct, or delete your information, please contact us at <strong>[Insert support email]</strong>.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>7. Links to Other Websites</h2>
        <p className='text-white'>
          Our website may contain links to third-party websites that are not operated or controlled by XpertIndicator. We are not responsible for the privacy practices or the content of those third-party websites.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>8. Children's Privacy</h2>
        <p className='text-white'>
          Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under the age of 13, we will take steps to delete that information.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>9. Changes to This Privacy Policy</h2>
        <p className='text-white'>
          XpertIndicator reserves the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with the updated date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
        <br></br>
        <h2 className='text-white text-2xl'>10. Contact Us</h2>
        <p className='text-white'>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <strong>[Insert support email]</strong>.
        </p>
        <br></br>
        <p className='text-white'>
          By using our website or purchasing our products, you consent to the terms of this Privacy Policy.
        </p>
      </div>
      <div></div>
      <Footer></Footer>
    </>
  );
}
