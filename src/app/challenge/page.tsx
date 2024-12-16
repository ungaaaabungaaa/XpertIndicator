import Head from 'next/head';
import Nav_Bar from '../components/navbar';
import Footer from '../components/footer';
import { Chip } from '@nextui-org/chip';
import CTA from '../components/cta';
import FAQPage from '../components/faq';

export default function Challenge() {
  return (
    <>
      <Head>
        <title>40x Challenge</title>
      </Head>
      <Nav_Bar></Nav_Bar>
      <br></br>
       <div className="w-100 p-6 flex items-center justify-center flex-col">
          <br></br>
          <Chip>40x Challenge Dashboard</Chip>
          <br></br>
          <h1 className="text-white text-2xl font-semibold text-center">
          Keep Daily Track Of Your Profits
          </h1>
          <p className="text-white text-center">
          Helps users make informed decisions based on the most up-to-date information, minimizing the risk of trading errors.
          </p>
          <br></br>  
        </div>
      <CTA></CTA>
      <FAQPage></FAQPage>
      <br></br>
      <Footer></Footer>
      
    </>
  );
}
