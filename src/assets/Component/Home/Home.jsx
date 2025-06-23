import React from 'react'
import photo1 from '../../../../public/Gallery/first.jpg.png'
import photo2 from '../../../../public/Gallery/2nd.jpg'
import photo3 from '../../../../public/Gallery/about us1.png'
import photo4 from '../../../../public/Gallery/servics.jpg'
import photo5 from '../../../../public/Gallery/about us2.jpg'
import photo6 from '../../../../public/Gallery/Testimonials.png'
import photo7 from '../../../../public/Gallery/sign up.png'
import photo8 from '../../../../public/Gallery/contact.png'
import photo9 from '../../../../public/Gallery/footer.png'

export default function Home() {
    return (
        <div>
            <img className='w-full' src={photo1} />
            <div className='flex justify-center items-center mb-20'>
                <img src={photo2} />
            </div>
            <img className='w-full' src={photo3} />
            <img className='w-full' src={photo4} alt="" srcset="" />
            <img className='w-full' src={photo5} alt="" srcset="" />
            <img className='w-full' src={photo6} alt="" srcset="" />
            <div className='flex  justify-center'>
                <img className='' src={photo7} alt="" srcset="" />
            </div>
            <img src={photo8} className='w-full' />
            <img src={photo9} className='w-full' />
        </div>
    )
}
