import { useEffect, useState } from 'react';
import hero from '../../assets/images/selamat&sukses.png'
import "../../App.css";
import { motion } from "framer-motion";

function Hero() {
  const Scale = {
    initial: { opacity: 0, scale: 0.5 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 2.0 },
    viewport: { once: true },
  };

  const Motionx = {
    initial: { opacity: 0, y: -100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1.5, ease: "easeInOut" },
    viewport: { once: true },
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const [percentage, setPercentage] = useState(0);
  const [votes, setVotes] = useState(0);

  useEffect(() => {
    const animatePercentage = setInterval(() => {
      if (percentage < 59.14) {
        setPercentage(prev => Math.min(prev + 0.1, 59.14));
      }
    }, 50); // Adjust speed with the interval time

    const animateVotes = setInterval(() => {
      if (votes < 11300000) {
        setVotes(prev => Math.min(prev + 10000, 11300000));
      }
    }, 50); // Adjust speed with the interval time

    return () => {
      clearInterval(animatePercentage);
      clearInterval(animateVotes);
    };
  }, [percentage, votes]);

  return (
    <section id='home'>
      <div className='grid grid-cols-1 h-screen bg-white p-2 md:p-0'>
        <div className='space-y-6 md:space-y-6 my-auto'>
          <motion.div {...Scale}>
            <div className=''>
              <img className='mx-auto md:w-2/4' src={hero} alt="luthfiyasin" />
            </div>
          </motion.div>
          <motion.div {...Motionx}>
            <div className='md:w-1/2 mx-auto'>
              <h1 className="text-xl md:text-4xl text-black font-extrabold text-center">
                Gubernur dan Wakil Gubernur
              </h1>
              <h1 className="text-xl md:text-4xl text-black font-extrabold text-center">
                Terpilih Jawa Tengah 2025 - 2029
              </h1>
            </div>
          </motion.div>
          <motion.div {...Motionx}>
            <div className="justify-center flex my-auto">
              <button id='dropbutton' onClick={scrollToContent}>
                <div className="" id="app">
                  <div className="arrow arrowSliding delay1"></div>
                  <div className="arrow arrowSliding delay2"></div>
                  <div className="arrow arrowSliding delay3"></div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
