import {AiFillCodepenCircle, AiFillGithub} from 'react-icons/ai'
import Image from '../../public/hero.png'

export default function Hero() {
  return (
    <div className='md:flex gap-18 xl:gap-96'>
        {/* Information section */}
        <div className='text-center p-10 '>
            <h1 className='text-4xl py-2 text-teal-600 font-medium md:text-6xl'>Christopher Ortega</h1>
            <h3 className='text-1xl py-2 md:text-3xl'>Software Engineer.</h3>
            <p className='text-md py-5 leading-9 text-gray-800 md:text-xl max-w-xl mx-auto'>Welcome! It's great to have you here. I'm a Frontend Developer.<br/>In free time I like developing side projects and learn new technologies.</p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href="https://github.com/Dotdae" target="_blank">
                <AiFillGithub className='hover:fill-sky-400'/>
            </a>
            <a href="#">
                <AiFillCodepenCircle className='hover:fill-sky-400'/>
            </a>
        </div>
        </div>
       
        <div className='mx-auto mb-10 bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 ml-2 md:mt-16'>
            <img src={Image} alt="Hero image" className='pt-7 md:pt-20 xl:pt-8'/>
        </div>
    </div>
  )
}
