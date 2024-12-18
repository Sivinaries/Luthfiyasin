import img1 from '../../assets/images/tri1.png'
import img2 from '../../assets/images/tri2.png'
import img3 from '../../assets/images/tri3.png'
import { motion } from "framer-motion";

function Tri() {

    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    return (
        <div className="grid grid-cols-1 my-20 md:my-44 bg-white">
            <div className="space-y-4 md:space-y-10">
                <div className="text-center p-3 md:p-6 bg-blue-800">
                    <h1 className="text-3xl md:text-6xl font-bold text-orange-500">TRI KARYA</h1>
                    <h1 className="text-3xl md:text-6xl font-bold text-white">3 PILAR PEMBANGUNAN</h1>
                </div>
                <div className='mx-4 xl:mx-24 space-y-10'>
                    <motion.div {...Motionx}>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                            <div className="my-auto space-y-4 md:space-y-10">
                                <div className="flex space-x-2 md:space-x-4">
                                    <h1 className="text-3xl md:text-6xl font-extrabold text-blue-800">O1</h1>
                                    <h1 className="my-auto text-2xl md:text-4xl">JATENG <span className="font-bold">SIGAP</span></h1>
                                </div>
                                <div className="">
                                    <h1 className="text-base md:text-xl font-base"
                                        style={{ textAlign: "justify" }}
                                    >Merupakan Spirit untuk <span className='font-bold'>Ngopeni</span> Warga dengan Sepenuh Hati dengan Kekuatan Semangat Kolaboratif dalam Mewujudkan <span className='font-bold'>Pendidikan</span> yang Merata dan Berkualitas, Pelayanan <span className='font-bold'>Kesehatan</span> yang Paripurna, serta <span className='font-bold'>Jaminan Sosial</span> bagi Seluruh Masyarakat Jawa Tengah. Pembangunan Infrastruktur yang Berkualitas Menjamin Konektivitas antar Wilayah.</h1>
                                </div>
                            </div>
                            <div className='col-span-2 justify-end flex'>
                                <img className='' src={img1} alt="" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...Motionx}>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                            <div className='col-span-2 justify-start flex order-2 md:order-1'>
                                <img className='' src={img2} alt="" />
                            </div>
                            <div className="my-auto space-y-4 md:space-y-10 mx-auto order-1 md:order-2">
                                <div className="flex space-x-2 md:space-x-4">
                                    <h1 className="text-3xl md:text-6xl font-extrabold text-blue-800">O2</h1>
                                    <h1 className="my-auto text-2xl md:text-4xl">JATENG <span className="font-bold">MAKMUR</span></h1>
                                </div>
                                <div className="">
                                    <h1 className="text-base md:text-xl font-base"
                                        style={{ textAlign: "justify" }}
                                    >Merupakan Langkah untuk <span className='font-bold'>Ngelakoni</span> Semua Penderitaan Masyarakat Jawa Tengah dengan Mewujudkan Masyarakat Jawa Tengah yang Maju dan Makmur, dengan <span className='font-bold'>Membuka Lapangan Pekerjaan yang Mudah dan Berkualitas, UMKM Berdaya, Ekonomi Kreatif Tumbuh, Buruh Hidup Layak, Koperasi Sehat, dan Warga Miskin Naik Kelas.</span></h1>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...Motionx}>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
                            <div className="my-auto space-y-4 md:space-y-10 mx-auto">
                                <div className="flex space-x-2 md:space-x-4">
                                    <h1 className="text-3xl md:text-6xl font-extrabold text-blue-800">O3</h1>
                                    <h1 className="my-auto text-2xl md:text-4xl">JATENG <span className="font-bold">NYAMAN</span></h1>
                                </div>
                                <div className="">
                                    <h1 className="text-base md:text-xl font-base"
                                        style={{ textAlign: "justify" }}
                                    >Kenyamanan dan Hidup Layak bagi Segenap Warga Jawa Tengah, <span className='font-bold'> Nyaman di Kota, Makmur di Desa. </span>Dengan <span className='font-bold'>Menjaga Kerukunan, Pelayanan, Pemerintahan yang Responsif, serta Kebebasan Menyampaikan Pendapat untuk Menjaga Demokrasi yang Berkualitas.</span> </h1>
                                </div>
                            </div>
                            <div className='flex justify-end col-span-2'>
                                <img className='' src={img3} alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Tri
