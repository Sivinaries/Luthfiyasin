import profil1 from '../../assets/images/ahmad.png'
import profil2 from '../../assets/images/yasin.png'
import name1 from '../../assets/images/ahmadname.png'
import name2 from '../../assets/images/yasinname.png'
import bendera from '../../assets/images/bendera.gif'
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowUpLeft } from "react-icons/go";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";


function Profil() {

    const Scale = {
        initial: { opacity: 0, scale: 0.5 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 2.0 },
        viewport: { once: true },
    };

    const Motionx = {
        initial: { opacity: 0, y: -130 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    return (
        <section id='profil'>
            <div className='grid grid-cols-1 md:h-screen md:my-20 h-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 md:my-auto space-y-10 md:space-y-0'>
                    <div className='my-auto relative mx-4 xl:mx-20 bg-blue-800 rounded-3xl p-2 md:p-0'>
                        <motion.div {...Motionx}>
                            <div className='absolute inset-0 z-0'>
                                <img className='w-full object-cover h-full ' src={bendera} alt="Bendera" />
                            </div>
                        </motion.div>
                        <div className='relative z-10'>
                            <motion.div {...Scale}>
                                <div>
                                    <img className='mx-auto md:my-10' src={name1} alt="Name" />
                                </div>
                            </motion.div>
                            <div className='absolute bottom-4 md:bottom-8 left-4 md:left-28 p-1 md:p-2 bg-gray-100 rounded-xl px-3 hover:scale-125  hover:delay-100 duration-100'>
                                <Link className='flex' to='/profil1'>
                                    <h1 className='text-black text-xl md:text-2xl px-4 font-light'>Lebih Kenali</h1>
                                    <GoArrowUpRight className='text-black w-6 md:w-8 h-6 md:h-8' />
                                </Link>
                            </div>
                            <div>
                                <img className='mx-auto z-20 rounded-b-3xl' src={profil1} alt="Profil" />
                            </div>
                        </div>
                    </div>
                    <div className='my-auto relative mx-4 xl:mx-20  bg-blue-800 rounded-3xl p-2 md:p-0'>
                        <motion.div {...Motionx}>
                            <div className='absolute inset-0 z-0'>
                                <img className='w-full object-cover h-full transform scale-x-[-1]' src={bendera} alt="Bendera" />
                            </div>
                        </motion.div>
                        <div className='relative z-10'>
                            <motion.div {...Scale}>
                                <div>
                                    <img className='mx-auto md:my-10' src={name2} alt="" />
                                </div>
                            </motion.div>
                            <div className=''>
                                <div className='absolute bottom-4 md:bottom-8 right-4 md:right-28 p-1 md:p-2 bg-gray-100 rounded-xl px-3 hover:scale-125  hover:delay-100 duration-100'>
                                    <Link className='flex' to='/profil2'>
                                        <GoArrowUpLeft className='text-black w-6 md:w-8 h-6 md:h-8' />
                                        <h1 className='text-black text-xl md:text-2xl px-4 font-light'>Lebih Kenali</h1>
                                    </Link>
                                </div>
                                <div className=''>
                                    <img className='mx-auto z-20 rounded-b-3xl' src={profil2} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profil
