import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import Swal from "sweetalert2";
import contact from '../../assets/images/contact.svg';
import api from "../../api";

function Contact() {
    const Motionx = {
        initial: { opacity: 0, y: -100 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 1.5, ease: "easeInOut" },
        viewport: { once: true },
    };

    const [kategoriList, setKategoriList] = useState([]);
    const [country, setCountry] = useState([]);
    const [formData, setFormData] = useState({
        nama: "",
        pekerjaan: "",
        whatsapp: "",
        email: "",
        usia: "",
        daerah_id: "",
        category_id: "",
        pengarepan: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
    const sendEmail = async () => {
        const forbiddenWords = [
            "vanesa",
            "vanessa",
            "duda",
            "jokowi",
            "rambo",
            "judi",
            "slot",
            "miras",
            "budak",
            "judol"
        ];

        const containsForbiddenWord = forbiddenWords.some(word =>
            formData.pengarepan.toLowerCase().includes(word)
        );

        if (containsForbiddenWord) {
            Swal.fire("Error", "Pengarepan tidak boleh mengandung kata sara !");
            return;
        }

        if (!formData.whatsapp || isNaN(formData.whatsapp)) {
            Swal.fire("Error", "WhatsApp harus berupa angka yang valid!");
            return;
        }

        if (!formData.whatsapp || isNaN(formData.whatsapp)) {
            Swal.fire("Error", "Usia harus berupa angka yang valid!");
            return;
        }

        if (!formData.email.includes("@")) {
            Swal.fire("Error", "Email harus mengandung simbol '@'!");
            return;
        }

        try {
            await api.post('/send', formData);
            Swal.fire("Success", "Pesan berhasil dikirim!", "success");
            setFormData({
                nama: "",
                pekerjaan: "",
                whatsapp: "",
                email: "",
                usia: "",
                daerah_id: "",
                category_id: "",
                pengarepan: "",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            Swal.fire("Error", "Gagal mengirim pesan!", "error");
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: categories } = await api.get('/category');
                const { data: daerahs } = await api.get('/country');
                setKategoriList(categories.categories || []);
                setCountry(daerahs.daerahs || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section id="contact">
            <div className="grid grid-cols-1 h-full bg-white max-w-7xl mx-auto">
                <div className="space-y-4 md:space-y-10 my-8">
                    <motion.div {...Motionx}>
                        <div className="flex gap-1 md:gap-2 w-3/4 md:w-1/2 mx-auto">
                            <div className="my-auto">
                                <h1 className="text-3xl md:text-7xl text-orange-500 font-extrabold text-center">Yuk Rembug</h1>
                                <h1 className="text-3xl md:text-7xl text-orange-500 font-extrabold text-center">Jawa Tengah!</h1>
                            </div>
                            <div className="my-auto">
                                <img className="w-20 h-24 md:w-full md:h-full" src={contact} alt="Contact Illustration" />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...Motionx}>
                        <div className="space-y-3 md:space-y-12">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="mx-10">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                        Nama *
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-black outline-none text-black"
                                        required
                                    />
                                </div>
                                <div className="mx-10">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                        Pekerjaan *
                                    </label>
                                    <input
                                        type="text"
                                        name="pekerjaan"
                                        value={formData.pekerjaan}
                                        onChange={handleChange}
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-black outline-none text-black"
                                        required
                                    />
                                </div>
                                <div className="mx-10">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                        Whatsapp *
                                    </label>
                                    <input
                                        type="number"
                                        name="whatsapp"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-black outline-none text-black"
                                        required
                                    />
                                </div>
                                <div className="mx-10">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-black outline-none text-black"
                                        required
                                    />
                                </div>
                                <div className="mx-10">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                        Usia *
                                    </label>
                                    <input
                                        type="number"
                                        name="usia"
                                        value={formData.usia}
                                        onChange={handleChange}
                                        className="w-full py-2 rounded-none bg-transparent border-b-2 border-black outline-none text-black"
                                        required
                                    />
                                </div>
                                <div className="mx-10">
                                    <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                        Kota/Kabupaten *
                                    </label>
                                    <select
                                        name="daerah_id"
                                        value={formData.daerah_id}
                                        onChange={handleChange}
                                        className="w-full py-2 bg-transparent border-b-2 border-black outline-none text-black"
                                        required
                                    >
                                        <option value="" disabled>Pilih Kota/Kabupaten</option>
                                        {country.map((kota) => (
                                            <option key={kota.id} value={kota.id}>
                                                {kota.nama}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mx-10">
                                <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                    Kategori *
                                </label>
                                <select
                                    name="category_id"
                                    value={formData.category_id}
                                    onChange={handleChange}
                                    className="w-full py-2 bg-transparent border-b-2 border-black outline-none text-black"
                                    required
                                >
                                    <option value="" disabled>Pilih Kategori</option>
                                    {kategoriList.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.nama}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mx-10">
                                <label className="text-sm xl:text-lg 2xl:text-xl text-black">
                                    Pengarepanmu kanggo Jawa Tengah *
                                </label>
                                <textarea
                                    name="pengarepan"
                                    value={formData.pengarepan}
                                    onChange={handleChange}
                                    className="w-full h-14 bg-transparent border-b-2 border-black outline-none text-black"
                                    required
                                />
                            </div>
                        </div>
                    </motion.div>
                    <motion.div {...Motionx}>
                        <div
                            className={`md:p-4 p-2 rounded-xl px-3 w-fit mx-auto ${isFormValid ? 'bg-blue-800 hover:scale-125 duration-100' : 'bg-gray-400 cursor-not-allowed'}`}
                        >
                            <button
                                className="flex justify-center"
                                onClick={sendEmail}
                                disabled={!isFormValid}
                            >
                                <h1 className="text-white text-base md:text-xl font-light my-auto">Kirim Pesan</h1>
                                <MdArrowOutward className="text-white w-6 md:w-8 h-6 md:h-8" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
