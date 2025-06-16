import React from 'react'
import person1 from '../src/assets/person-image.png'
import pic1 from '../src/assets/html.png'
import pic2 from '../src/assets/css.png'
import pic3 from '../src/assets/js.png'
import pic4 from '../src/assets/tailwind.png'
import pic5 from '../src/assets/react.png'
import Scroll_fade from '../src/hooks/scroll_fade'

export default function About(){

  const[visible1,ref1]=Scroll_fade({threshold:0.5})
  const[visible2,ref2]=Scroll_fade({threshold:0.5})
  const[visible3,ref3]=Scroll_fade({threshold:0.5})
  const[visible4,ref4]=Scroll_fade({threshold:0.5})
    return(
      <div className={`relative  min-h-[100vh] w-[100%]   scroll-mt-[100px] duration-[3s] overflow-hidden`} ref={ref2} id='about'>
     <h1 className=' text-6xl font-bold underline text-center  '>About</h1>
     <div className='mt-[10%] gap-[100px] lg:gap-0  flex flex-col items-center  lg:flex-row justify-between mx-[50px]'>
        <img src={person1} className={`rounded-2xl  shadow-[0.1px_0.1px_60px_rgb(166,165,162)] h-[500px]  sm:h-[550px] md:h-[700px] w-[450px] ${visible1 ? " opacity-100 scale-100 rotate-y-0":"opacity-0 scale-50 rotate-y-[180deg]"} transition-all duration-[2s]  `} ref={ref1}/>
        <div className={`border-groove shadow-[0.1px_0.1px_60px_rgb(166,165,162)] p-1.5 ${visible3 ?"opacity-100 scale-100 rotate-y-0":"opacity-0 scale-50 rotate-y-[180deg]"} transition-all duration-[3s]`} ref={ref3}>
        <p className=' w-[300px] sm:w-[500px] text-[16px] md:text-[24px] text-center capitalize font-Montserrat'>
            I’m a passionate Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. I focus on creating clean, responsive, and high-performing user interfaces that deliver a smooth and engaging experience across all devices. Whether it's bringing a design to life or building a component-based architecture, I enjoy writing efficient and maintainable code. I take pride in turning complex ideas into polished and interactive web applications with attention to detail and modern design principles.My goal is to build interfaces that not only look great but also feel fast, intuitive, and reliable
        </p>
        <div className='flex flex-row gap-[2.5%] md:gap-[5%] mt-4 '>
         <img src={pic1} className='h-[55px]  sm:h-[65px] md:h-[80px]'/>
         <img src={pic2} className='h-[55px]  sm:h-[65px] md:h-[80px]'/>
         <img src={pic3} className='h-[55px]  sm:h-[65px] md:h-[80px]'/>
         <img src={pic4} className='h-[55px]  sm:h-[65px] md:h-[80px]'/>
         <img src={pic5} className='h-[55px]  sm:h-[65px] md:h-[80px]'/>     
        </div>
        </div>
     </div>
      </div>
    )
}