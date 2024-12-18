import { useState } from 'react'
import img1 from '../../assets/images/misi1.png'
import img2 from '../../assets/images/misi2.png'
import img3 from '../../assets/images/misi3.png'
import img4 from '../../assets/images/misi4.png'
import img5 from '../../assets/images/misi5.png'
import img6 from '../../assets/images/misi6.png'
import maju from '../../assets/images/maju.png'
import berkelanjutan from '../../assets/images/berkelanjutan.png'
import emas from '../../assets/images/emas.png'
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

function Visimisi() {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
    };

    return (
        <section id='visimisi'>
            <div className="grid grid-cols-1 bg-white md:my-44 my-20">
                <div className="mx-4 xl:mx-20 space-y-4 md:space-y-10">
                    <div className='space-y-4 md:space-y-10'>
                        <motion.div {...Motionx}>
                            <div>
                                <div className="p-1 md:p-2 bg-orange-500 w-fit rounded-3xl px-4 md:px-6">
                                    <h1 className="text-white text-xl md:text-3xl font-extrabold">Visi</h1>
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl md:text-3xl">JAWA TENGAH</h1>
                                </div>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
                            {/* Maju Section */}
                            <motion.div className='' {...Motionx}>
                                <div className="p-2 md:p-4 bg-blue-900 rounded-xl ">
                                    <button className='w-full' onClick={toggleDropdown}>
                                        <div className='flex justify-between'>
                                            <div className='flex gap-2 md:gap-4 my-auto'>
                                                <div className='my-auto'>
                                                    <h1 className="text-xl xl:text-3xl text-white font-extrabold">MAJU</h1>
                                                </div>
                                                <div>
                                                    <img
                                                        className='xl:w-full w-12 xl:h-20 h-10 transform transition-all duration-300 hover:scale-125'
                                                        src={maju}
                                                        alt="Maju"
                                                    />
                                                </div>
                                            </div>
                                            <div className='my-auto'>
                                                <IoIosArrowDown className='text-orange-500 xl:h-12 h-8 xl:w-12 w-8 my-auto' />
                                            </div>
                                        </div>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="my-4 bg-white p-4 rounded-xl">
                                            <p
                                                className="text-black font-normal text-left text-xs xl:text-xl"
                                                style={{ textAlign: "justify" }}
                                            >
                                                Provinsi Jawa Tengah sebagai provinsi yang mampu menjawab <span className='font-extrabold'>Tantangan Global</span> dan sebagai <span className='font-extrabold'>Kontributor Perkembangan Nasional</span> yang <span className='font-extrabold'>Berdaya Saing, Modern, Inovatif, Mandiri, Tangguh, Aman, Dan Responsif Terhadap Lingkungan;</span> serta sebagai <span className='font-extrabold'>Episentrum Lumbung Pangan, Industri Nasional, Dan Magnet Perkembangan Budaya Serta Kerukunan Umat Beragama di Nusantara.
                                                </span></p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                            <motion.div {...Motionx}>
                                {/* Berkelanjutan Section */}
                                <div className="p-2 md:p-4 bg-blue-900 rounded-xl">
                                    <button className='w-full' onClick={toggleDropdown2}>
                                        <div className='flex md:gap-0 justify-between'>
                                            <div className='flex gap-2 md:gap-4 my-auto'>
                                                <div className='my-auto'>
                                                    <h1 className="text-xl xl:text-3xl text-white font-extrabold">BERKELANJUTAN</h1>
                                                </div>
                                                <div>
                                                    <img
                                                        className='xl:w-20 w-12 xl:h-20 h-10 transform transition-all duration-300 hover:scale-125'
                                                        src={berkelanjutan}
                                                        alt="Berkelanjutan"
                                                    />
                                                </div>
                                            </div>
                                            <div className='my-auto'>
                                                <IoIosArrowDown className='text-orange-500 xl:h-12 h-8 xl:w-12 w-8 my-auto' />
                                            </div>
                                        </div>
                                    </button>
                                    {isDropdownOpen2 && (
                                        <div className="my-4 bg-white p-4 rounded-xl">
                                            <p
                                                className="text-black font-normal text-left text-xs xl:text-xl"
                                                style={{ textAlign: "justify" }}
                                            >
                                                Melanjutkan dan meningkatkan <span className='font-extrabold'>Pembangunan Di Jawa Tengah</span> yang sudah berjalan dengan baik; melakukan <span className='font-extrabold'>Integrasi</span> program antara Pemerintah Pusat, serta melakukan <span className='font-extrabold'>Kolaborasi</span> pembangunan daerah dengan <span className='font-extrabold'>Pemerintah Kabupaten/Kota dan Pemerintah Desa.</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                            <motion.div {...Motionx}>
                                {/* Indonesia Emas 2045 Section */}
                                <div className="p-2 md:p-4 bg-blue-900 rounded-xl relative">
                                    <button className='w-full' onClick={toggleDropdown3}>
                                        <div>
                                            <div className='flex justify-between my-auto'>
                                                <div className="relative z-10 my-3 xl:my-6">
                                                    <h1 className="text-xl xl:text-3xl text-white font-extrabold">INDONESIA EMAS 2045</h1>
                                                </div>
                                                <div className='my-auto'>
                                                    <IoIosArrowDown className='text-orange-500 xl:h-12 h-8 xl:w-12 w-8 my-auto' />
                                                </div>
                                            </div>
                                            <div className="absolute inset-0">
                                                <img
                                                    className="mx-auto object-cover w-fit h-16 xl:h-fit z-0 transform transition-all duration-300 hover:scale-125"
                                                    src={emas}
                                                    alt="Emas"
                                                />
                                            </div>

                                        </div>
                                    </button>
                                    {isDropdownOpen3 && (
                                        <div className="my-8 bg-white p-4 rounded-xl z-10">
                                            <p
                                                className="text-black font-normal text-left text-xs xl:text-xl"
                                                style={{ textAlign: "justify" }}
                                            >
                                                Kontribusi Provinsi Jawa Tengah sebagai <span className='font-extrabold'>Episentrum Pembangunan Sumber Daya Manusia Nasional</span> menuju bonus demografi pada tahun 2045; yang menjadi <span className='font-extrabold'>Sumber Inspirasi Bagi Dunia</span> dengan <span className='font-extrabold'>Generasi Yang Cerdas Serta Ekonomi Yang Tumbuh Dan Berkembang.</span>                                            </p>
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='space-y-4 md:space-y-10'>
                            <motion.div {...Motionx}>
                                <div>
                                    <div className="p-1 md:p-2 bg-orange-500 w-fit rounded-3xl px-4 md:px-6">
                                        <h1 className="text-white text-xl md:text-3xl font-extrabold">Misi</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-xl md:text-3xl">JAWA TENGAH</h1>
                                    </div>
                                </div>
                            </motion.div>
                            <div className="flex overflow-x-scroll space-x-2 md:space-x-4">
                                <motion.div {...Motionx}>
                                    <div className="relative w-64 md:w-80 flex-shrink-0">
                                        <div className="absolute top-5 left-3 z-10">
                                            <h1 className="text-orange-500 text-xl md:text-3xl font-bold">MISI 1</h1>
                                        </div>
                                        <div className="absolute bottom-7 left-3 right-3 z-10">
                                            <h1 className="text-white text-xs md:text-sm font-light">
                                                Meningkatkan Layanan Dasar yang Inklusif untuk Mewujudkan Sumber Daya Manusia yang Mandiri, Kompetitif, dan Berwawasan Global.
                                            </h1>
                                        </div>
                                        <div className="relative">
                                            <img className="" src={img1} alt="Mission 1" />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>
                                    <div className="relative w-64 md:w-80 flex-shrink-0">
                                        <div className="absolute top-5 left-3 z-10">
                                            <h1 className="text-orange-500 text-xl md:text-3xl font-bold">MISI 2</h1>
                                        </div>
                                        <div className="absolute bottom-7 left-3 right-3 z-10">
                                            <h1 className="text-white text-xs md:text-sm font-light">
                                                Meningkatkan Pertumbuhan Perekonomian Perkotaan dan Pedesaan Berbasis Sektor Unggulan yang Inovatif,Mandiri, dan Berkelanjutan 
                                            </h1>
                                        </div>
                                        <div className="relative">
                                            <img className="" src={img2} alt="Mission 2" />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>

                                    <div className="relative w-64 md:w-80 flex-shrink-0">
                                        <div className="absolute top-5 left-3 z-10">
                                            <h1 className="text-orange-500 text-xl md:text-3xl font-bold">MISI 3</h1>
                                        </div>
                                        <div className="absolute bottom-7 left-3 right-3 z-10">
                                            <h1 className="text-white text-xs md:text-sm font-light">
                                                Mewujudkan Tata Kelola Pemerintahan yang Responsif dan Kolaboratif dengan Mengedepankan Nilai-nilai Integritas.
                                            </h1>
                                        </div>
                                        <div className="relative">
                                            <img className="" src={img3} alt="Mission 3" />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>

                                    <div className="relative w-64 md:w-80 flex-shrink-0">
                                        <div className="absolute top-5 left-3 z-10">
                                            <h1 className="text-orange-500 text-xl md:text-3xl font-bold">MISI 4</h1>
                                        </div>
                                        <div className="absolute bottom-7 left-3 right-3 z-10">
                                            <h1 className="text-white text-xs md:text-sm font-light">
                                                Mewujudkan Pembangunan Infrastruktur Jawa Tengah yang Merata dan Berkeadilan melalui Perencanaan Tata Ruang yang Responsif.                                    </h1>
                                        </div>
                                        <div className="relative">
                                            <img className="" src={img4} alt="Mission 4" />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>

                                    <div className="relative w-64 md:w-80 flex-shrink-0">
                                        <div className="absolute top-5 left-3 z-10">
                                            <h1 className="text-orange-500 text-xl md:text-3xl font-bold">MISI 5</h1>
                                        </div>
                                        <div className="absolute bottom-7 left-3 right-3 z-10">
                                            <h1 className="text-white text-xs md:text-sm font-light">
                                                Menjaga Stabilitas dan Kondusifitas Daerah dengan Pendekatan Budaya Lokal, serta Menjamin Kebebasan Warga dalam Menjalankan Ibadah, Perlindungan Kesejahteraan Sosial, serta Hak Asasi Manusia yang Berkeadilan.                                    </h1>
                                        </div>
                                        <div className="relative">
                                            <img className="" src={img5} alt="Mission 5" />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div {...Motionx}>

                                    <div className="relative w-64 md:w-80 flex-shrink-0">
                                        <div className="absolute top-5 left-3 z-10">
                                            <h1 className="text-orange-500 text-xl md:text-3xl font-bold">MISI 6</h1>
                                        </div>
                                        <div className="absolute bottom-7 left-3 right-3 z-10">
                                            <h1 className="text-white text-xs md:text-sm font-light">
                                                Menjaga Iklim Investasi yang Kondusif dan Kolaboratif untuk Membuka Kesempatan Kerja dan Berusaha Seluas-luasnya bagi Warga Jawa Tengah. Serta Mengembangkan Pembiayaan Pembangunan yang Partisipatif, Kolaboratif, dan Terintegrasi.                                    </h1>
                                        </div>
                                        <div className="relative">
                                            <img className="" src={img6} alt="Mission 6" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Visimisi
