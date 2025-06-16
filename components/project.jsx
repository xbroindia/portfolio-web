 import React from 'react'
 import { useState } from 'react';
 
 
 import pic1 from '../src/assets/The-shoe-company.jpeg'
 import pic2 from '../src/assets/tic-tac-toe.jpeg'
 import pic3 from '../src/assets/Rest Country.jpeg'
 import pic4 from '../src/assets/Interior-Guru -Designer.jpeg'
 import pic5 from '../src/assets/Document.jpeg'
import Scroll_fade from '../src/hooks/scroll_fade';
 
export default function Project() {

const [visible,ref1] =Scroll_fade({threshold:0.5})

const images = [
   pic1,
   pic2,
   pic3,
   pic4,
   pic5
];

const datas = [
   { "src":pic1,
     "link":"https://shoe-comp.netlify.app/"
   },
   { "src":pic2,
     "link":"https://tic-tac-toe-game-proj.netlify.app/"
   },
   {
    "src":pic3,
    "link":"https://countrie-api-react.netlify.app/"
   },
   {
    "src":pic4,
    "link":"https://interiror-designing-web.netlify.app/"
   },
   {"src":pic5,
    "link":"https://valentine-greetings-web.netlify.app/"
   }
];


datas.map((imgdata)=>{
    const{src,link} = imgdata
    console.log(src,link)
})

   const [angle, setAngle] = useState(0);

   const handleLeftClick = () => {
    setAngle((prev) => prev + 72);
  };

  const handleRightClick = () => {
    setAngle((prev) => prev - 72);
  };


   return (
     <div id="projects" className='min-h-[50vh] w-[100%] scroll-mt-[80px] mt-[20%] '>
     <h1 className=' text-center underline capitalize font-bold text-6xl mb-[100px] '>projects</h1>
     <div className='imageSlider mt-[15%]'>
     <button className="arrow left-arrow" onClick={handleLeftClick}>&#8592;</button>
      <button className="arrow right-arrow" onClick={handleRightClick}>&#8594;</button>
      <div
        className={`imageSlider__container transition-all duration-[2.5s] `}
        style={{ transform: `rotateY(${angle}deg)`}}
        ref={ref1}
      >
        {datas.map((imgdata, index) => {
          const{src,link} =imgdata
          const rotation = index * (360 / images.length); // e.g., 0, 72, 144...
          return (
            <a
              href={link}
              key={index}
              className={`carousel__slide transition-all duration-[2.5s] ${visible ?"opacity-100 scale-100" : "opacity-0 scale-50"}`}
              style={{
                backgroundImage: `url(${src})`,
                transform: `rotateY(${rotation}deg) translateZ(242px)`,
 
              }}
            >
              
            </a>
          );
        })}
      </div>
     </div>
     </div>
   )
 }
 