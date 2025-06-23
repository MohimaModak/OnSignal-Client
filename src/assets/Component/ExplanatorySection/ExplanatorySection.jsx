import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll';

export default function ExplanatorySection() {

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
        <div className='py-14 px-6 lg:px-20 relative text-center bg-gray-900'>
            <div data-aos="fade-up" className='max-w-3xl mx-auto'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-cyan-400'>
                    Was ist das?
                </h2>
                <p className='text-lg text-gray-300 leading-relaxed'>
                    Ab sofort bieten wir einen Informationsdienst, um Sie schnell und gezielt über Neuigkeiten aus dem Ort zu informieren.
                    Sie entscheiden selbst, welche Themen Sie abonnieren möchten. So bleiben Sie immer aktuell informiert, direkt und aus erster Hand.
                </p>
            </div>
        </div>
    )
}