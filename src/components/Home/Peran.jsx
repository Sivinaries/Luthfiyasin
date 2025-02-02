import { motion } from "framer-motion";
import peran from '../../assets/images/peran1.png'
import peran2 from '../../assets/images/peran2.png'
import { MdArrowOutward } from "react-icons/md";

function Peran() {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    return (
        <div className="grid grid-cols-1 my-6 md:my-20 bg-white max-w-7xl mx-auto">
            <div className="space-y-4 md:space-y-10">
                <motion.div {...Motionx}>
                    <div className="space-y-3 md:space-y-6">
                        <div className="flex gap-2 md:gap-6 w-5/6 mx-auto">
                            <h1 className="text-3xl md:text-7xl font-extrabold my-auto">Saatnya</h1>
                            <img className="w-1/4 md:w-full h-8 md:h-fit my-auto" src={peran} alt="" />
                            <h1 className="text-3xl md:text-7xl font-extrabold my-auto">Berperan</h1>
                        </div>
                        <div className="flex gap-2 md:gap-6 w-5/6 mx-auto">
                            <h1 className="text-3xl md:text-7xl font-extrabold my-auto">Untuk</h1>
                            <h1 className="text-3xl md:text-7xl font-extrabold my-auto">Kemajuan</h1>
                            <img className="w-1/4 md:w-full h-8 md:h-fit my-auto" src={peran2} alt="" />
                        </div>
                        <div className="mx-auto w-5/6">
                            <h1 className="text-3xl md:text-7xl font-extrabold my-auto text-blue-800">Jawa Tengah</h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div {...Motionx}>
                    <div className='md:p-4 p-2 bg-blue-800 hover:scale-125 hover:delay-100 duration-100 rounded-xl px-3 w-fit mx-auto'>
                        <a className='flex justify-center' href="/contact">
                            <h1 className='text-white text-base md:text-xl font-light my-auto'>Yuk Urun Rembug !</h1>
                            <MdArrowOutward className='text-white w-6 md:w-8 h-6 md:h-8' />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Peran
