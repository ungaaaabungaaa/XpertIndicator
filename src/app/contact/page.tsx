import Head from 'next/head';
import Nav_Bar from '../components/navbar';
import FAQ from '../components/faq'
import Contact_Hero from '../components/contact_hero'
import CTA from '../components/cta';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Nav_Bar></Nav_Bar>
      <Contact_Hero></Contact_Hero>
      <br></br>
      <FAQ></FAQ>
      <br></br>
      <CTA></CTA>
      <br></br>
      <Footer></Footer>

    </>
  );
}
