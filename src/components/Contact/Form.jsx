import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import contact from '../../assets/images/contact.svg';
import api from "../../api";

function Form() {
    const forbiddenWords = [
        "vanesa",
        "vanessa",
        "judol",
        "mabok",
        "ladusing",
        "budak",
        "sambo",
        "rambo",
        "judi",
        "judol",
        "slot",
        "miras"
    ];

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
        searchKota: "",
        kategori_messages: []
    });

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [charCount, setCharCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        const hasForbiddenWord = forbiddenWords.some((word) =>
            value.trim().toLowerCase().includes(word.toLowerCase())
        );

        if (hasForbiddenWord) {
            setErrorMessage("Your input contains forbidden words.");
        } else {
            setErrorMessage(""); // Clear error if input is valid
        }

        if (name === 'wish' && value.length <= 40) {
            setCharCount(value.length);
        }

        setFormData({ ...formData, [name]: value });
    };

    const handleWishChange = (index, value) => {
        setFormData((prev) => {
            const updatedKategoriMessages = [...prev.kategori_messages];
            if (updatedKategoriMessages[index]) {
                updatedKategoriMessages[index].wish = value || null;
            }
            return { ...prev, kategori_messages: updatedKategoriMessages };
        });
    };

    const isFormValid = () => {
        const requiredFields = ['nama', 'pekerjaan', 'whatsapp', 'email', 'usia', 'daerah_id'];
        const allFieldsFilled = requiredFields.every(
            (field) => formData[field]?.toString().trim() !== ""
        );

        const validEmail = /\S+@\S+\.\S+/.test(formData.email);

        const allKategoriMessagesValid = formData.kategori_messages.every(
            (msg) => msg?.wish?.toString().trim() !== "" || msg?.wish === null
        );

        return allFieldsFilled && validEmail && allKategoriMessagesValid && !errorMessage;
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: categories } = await api.get('/category');
                const { data: daerahs } = await api.get('/country');
                setKategoriList(categories.categories || []);
                setCountry(daerahs.daerahs || []);

                setFormData((prev) => ({
                    ...prev,
                    kategori_messages: categories.categories.map((kategori) => ({
                        kategori_id: kategori.id,
                        wish: null
                    }))
                }));
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const sendEmail = async () => {
        if (errorMessage) {
            return; // Do not proceed if forbidden words exist
        }

        try {
            setIsSubmitting(true);
            const response = await api.post('/send', {
                nama: formData.nama,
                pekerjaan: formData.pekerjaan,
                whatsapp: formData.whatsapp,
                email: formData.email,
                usia: formData.usia,
                daerah_id: formData.daerah_id,
                kategori_messages: formData.kategori_messages,
            });

            console.log('Success:', response.data);
            Swal.fire('Success!', 'Your message has been sent.', 'success');
            setFormData({
                nama: "",
                pekerjaan: "",
                whatsapp: "",
                email: "",
                usia: "",
                daerah_id: "",
                kategori_messages: kategoriList.map((kategori) => ({
                    kategori_id: kategori.id,
                    wish: null
                }))
            });
            setCharCount(0);
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            Swal.fire('Error!', 'Failed to send message.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="contact">
            <div className="grid grid-cols-1 h-full bg-white max-w-7xl mx-auto">
                <div className='fixed left-4 top-4 bg-gray-100 p-1 md:p-2 px-2 md:px-3 hover:scale-125 hover:delay-100 duration-100 rounded-2xl z-50'>
                    <Link to='/'>
                        <IoIosArrowRoundBack className='text-black md:w-12 w-8 md:h-10 h-6' />
                    </Link>
                </div>
                <div className="space-y-4 md:space-y-10 my-20">
                    <motion.div {...Motionx}>
                        <div className="flex gap-1 md:gap-2 w-3/4 md:w-1/2 mx-auto">
                            <div className="my-auto">
                                <h1 className="text-3xl md:text-7xl text-orange-500 font-extrabold text-center">Yuk Usul Buat</h1>
                                <h1 className="text-3xl md:text-7xl text-orange-500 font-extrabold text-center">Jawa Tengah!</h1>
                            </div>
                            <div className="my-auto">
                                <img className="w-20 h-24 md:w-full md:h-full" src={contact} alt="Contact Illustration" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div {...Motionx}>
                        <div className="space-y-5 md:space-y-10">
                            <div className="grid md:grid-cols-2 gap-4">
                                {['nama', 'pekerjaan', 'whatsapp', 'email', 'usia'].map((field) => (
                                    <div key={field} className="mx-10">
                                        <label className="text-sm xl:text-lg text-black">
                                            {field.charAt(0).toUpperCase() + field.slice(1)} *
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : (field === 'whatsapp' || field === 'usia' ? 'number' : 'text')}
                                            name={field}
                                            value={formData[field]}
                                            onChange={handleChange}
                                            className="w-full py-2 border-b-2 border-black outline-none text-black"
                                            required
                                            min={field === 'usia' ? "1" : undefined} // For usia, prevent 0 or negative
                                        />
                                    </div>
                                ))}
                                <div className="mx-10 relative">
                                    <label className="text-sm xl:text-lg text-black">Kota/Kabupaten *</label>
                                    <input
                                        type="text"
                                        placeholder="Cari Kota/Kabupaten"
                                        value={formData.searchKota || ''}
                                        onFocus={() => setIsDropdownVisible(true)}
                                        onBlur={() => setTimeout(() => setIsDropdownVisible(false), 200)}
                                        onChange={(e) => {
                                            setFormData({ ...formData, searchKota: e.target.value });
                                            setIsDropdownVisible(true);
                                        }}
                                        className="w-full py-2 border-b-2 border-black outline-none text-black"
                                    />
                                    {isDropdownVisible && (
                                        <div className="absolute bg-white border border-gray-300 max-h-40 overflow-y-auto w-full mt-1 z-10 shadow-md rounded-md">
                                            {country
                                                .filter((kota) =>
                                                    kota.nama.toLowerCase().includes((formData.searchKota || '').toLowerCase())
                                                )
                                                .map((kota) => (
                                                    <div
                                                        key={kota.id}
                                                        onClick={() => {
                                                            setFormData({ ...formData, daerah_id: kota.id, searchKota: kota.nama });
                                                            setIsDropdownVisible(false);
                                                        }}
                                                        className={`p-2 cursor-pointer hover:bg-gray-200 ${formData.daerah_id === kota.id ? 'bg-gray-300' : ''
                                                            }`}
                                                    >
                                                        {kota.nama}
                                                    </div>
                                                ))}
                                            {country.filter((kota) =>
                                                kota.nama.toLowerCase().includes((formData.searchKota || '').toLowerCase())
                                            ).length === 0 && (
                                                    <div className="p-2 text-gray-500">Tidak ada hasil ditemukan</div>
                                                )}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="text-center mx-auto flex items-center justify-center">
                                <label className="text-xl xl:text-2xl text-black">Usulan Terkait *</label>
                            </div>
                            {isLoading ? (
                                <div className="text-center text-xl">Loading...</div>
                            ) : (
                                kategoriList.map((item, index) => (
                                    <div key={item.id} className="mx-10">
                                        <label className="text-sm xl:text-lg text-black">{item.nama}</label>
                                        <input
                                            type="text"
                                            value={formData.kategori_messages[index]?.wish || ''}
                                            onChange={(e) => {
                                                if (e.target.value.length <= 40) {
                                                    handleWishChange(index, e.target.value);
                                                }
                                            }}
                                            className="w-full py-2 border-b-2 border-black outline-none text-black"
                                        />
                                        <p className="text-xs text-gray-500 ">
                                            {formData.kategori_messages[index]?.wish?.length || 0}/40 karakter
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </motion.div>

                    {errorMessage && (
                        <div className="text-red-500 text-center">{errorMessage}</div>
                    )}

                    <button
                        className={`flex justify-center ${isFormValid()
                            ? 'bg-blue-800 hover:scale-125 duration-100'
                            : 'bg-gray-400 cursor-not-allowed'
                            } md:p-4 p-2 rounded-xl px-3 w-fit mx-auto`}
                        onClick={sendEmail}
                        disabled={!isFormValid() || isSubmitting}
                    >
                        <h1 className="text-white text-base md:text-xl font-light my-auto">
                            {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                        </h1>
                        <MdArrowOutward className="text-white w-6 md:w-8 h-6 md:h-8" />
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Form;
