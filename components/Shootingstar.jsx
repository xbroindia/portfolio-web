import React, { useEffect } from 'react';
 import '../src/assets/shootingstar.css'

const ShootingStars = () => {
  useEffect(() => {
    const sky = document.getElementById('sky');

    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';

      // Spawn mostly in left 40% of width
      const startLeft = Math.random() * window.innerWidth * 0.4;

      // Y-position areas: top-left, middle-left
      const yZone = Math.random();
      let startTop;
      if (yZone < 0.33) {
        startTop = Math.random() * window.innerHeight * 0.2; // top 20%
      } else if (yZone < 0.66) {
        startTop = window.innerHeight * 0.3 + Math.random() * window.innerHeight * 0.3; // 30%–60%
      } else {
        startTop = Math.random() * window.innerHeight * 0.9; // full range (rare)
      }

      star.style.left = `${startLeft}px`;
      star.style.top = `${startTop}px`;

      sky.appendChild(star);

      setTimeout(() => {
        star.remove();
      }, 3000); // matches CSS animation duration
    };

    // Lowered frequency, more natural
    const interval = setInterval(() => {
      if (Math.random() < 0.7) {
        createShootingStar();
      }
    }, 800 + Math.random() * 600);

    return () => clearInterval(interval);
  }, []);

  return <div id="sky" className="sky"></div>;
};

export default ShootingStars;