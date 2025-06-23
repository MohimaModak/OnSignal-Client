import React, { useEffect } from 'react';
import background from "../../../Gallery/Hero.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';
import ExplanatorySection from '../ExplanatorySection/ExplanatorySection';
import Footer from '../Footer/Footer';
import OneSignal from '../OneSignal/OneSignal';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-out',
      once: true,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div id='/'>
        <div className='relative'>
          <img src={background} className='w-full h-screen object-cover' alt="Background" />
        </div>
        <div data-aos="fade-up" className='absolute inset-0 flex justify-center items-center text-orange-300 mx-5'>
          <div className='bg-white/15 backdrop-blur-3xl p-4 lg:p-8 rounded-3xl border text-center shadow-md hover:scale-110 duration-1000'>
            <h1 className='text-4xl md:text-7xl font-bold  textshadow'>Markt Laaber</h1>
            <p className='text-xl md:text-3xl my-4 text-orange-300'>Informationsdienst – Laaber</p>
            <p>Bleibe informiert über alle wichtigen Dinge im Ort</p>

          </div>
        </div>
      </div>
      <ExplanatorySection></ExplanatorySection>
      <OneSignal></OneSignal>
      <Footer></Footer>
    </div>
  )
}