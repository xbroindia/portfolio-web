import React, { useState, useEffect } from 'react';

import pic1 from '../src/assets/The-shoe-company.jpeg';
import pic2 from '../src/assets/tic-tac-toe.jpeg';
import pic3 from '../src/assets/Rest Country.jpeg';
import pic4 from '../src/assets/Interior-Guru -Designer.jpeg';
import pic5 from '../src/assets/Document.jpeg';
import pic6 from '../src/assets/project-img.png';

import Scroll_fade from '../src/hooks/scroll_fade';

export default function Project() {
  const [visible, ref1] = Scroll_fade({ threshold: 0.5 });
  const [visible2, ref2] = Scroll_fade({ threshold: 0.5 });
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 540);

  // Detect screen width and update isMobile state
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 540px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    setIsMobile(mediaQuery.matches); // initial check
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  const images = [pic1, pic2, pic3, pic4, pic5];

  const datas = [
    {
      src: pic1,
      link: 'https://shoe-comp.netlify.app/',
    },
    {
      src: pic2,
      link: 'https://tic-tac-toe-game-proj.netlify.app/',
    },
    {
      src: pic3,
      link: 'https://countrie-api-react.netlify.app/',
    },
    {
      src: pic4,
      link: 'https://interiror-designing-web.netlify.app/',
    },
    {
      src: pic5,
      link: 'https://valentine-greetings-web.netlify.app/',
    },
  ];

  const handleLeftClick = () => {
    setAngle((prev) => prev + 72);
  };

  const handleRightClick = () => {
    setAngle((prev) => prev - 72);
  };

  return (
    <div id="projects" className="min-h-[100vh] w-full scroll-mt-[80px] mt-[25%]">
      <h1 className="text-center underline capitalize font-bold text-6xl mb-[100px]">
        Projects
      </h1>

      <div className="flex justify-center items-center flex-col lg:flex-row">
      
    <div className={`h-[300px] short:h-[600px] w-[300px] overflow-hidden short:w-[600px] md:w[700px]
                   ${visible2 ? " opacity-100 scale-100 rotate-y-0":"opacity-0 scale-50 rotate-y-[180deg]"} transition-all duration-[2s] 
      `} ref={ref2}>
          <img src={pic6} className="h-full w-full object-contain" />
        </div>

        <div className="imageSlider mt-[10vh] relative">
          <button className="arrow left-arrow absolute left-0 top-1/2 z-10" onClick={handleLeftClick}>
            &#8592;
          </button>
          <button className="arrow right-arrow absolute right-0 top-1/2 z-10" onClick={handleRightClick}>
            &#8594;
          </button>

          <div
            className={`imageSlider__container transition-all duration-[2.5s]`}
            style={{ transform: `rotateY(${angle}deg)` }}
            ref={ref1}
          >
            {datas.map((imgdata, index) => {
              const { src, link } = imgdata;
              const rotation = index * (360 / images.length); 
              return (
                <a
                  href={link}
                  key={index}
                  className={`carousel__slide transition-all duration-[2.5s] ${
                    visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{
                    backgroundImage: `url(${src})`,
                    transform: `rotateY(${rotation}deg) translateZ(${isMobile ? 180 : 242}px)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
