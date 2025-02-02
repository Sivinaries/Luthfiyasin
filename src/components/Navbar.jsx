import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const navLinks = [
        { title: 'Home', to: '/' },
        { title: 'Visi & Misi', to: '/' },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 1024); // Mobile if width is less than 1024px
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav className={`z-50 fixed top-0 right-0 left-0 p-4 xl:p-0 ${isScrollingUp ? 'bg-white' : 'bg-transparent'} transition-all duration-300`}>
                    <div className="flex justify-between items-center">
                        <a href='/' className="flex items-center" >
                            <img className="w-28 h-20 block md:hidden z-50" src={logo} alt="Logo" />
                        </a>
                        {isMobileView ? (
                            <button className="text-black" onClick={toggleMenu}>
                                {menuOpen ? (
                                    <FaTimes className="w-6 h-6 sm:w-8 sm:h-8" />
                                ) : (
                                    <FaBars className="w-6 h-6 sm:w-8 sm:h-8" />
                                )}
                            </button>
                        ) : (
                            // Keep the desktop layout as is
                            <div className="hidden md:flex justify-between items-center w-full">
                                <div className='my-auto w-full md:w-1/3'>
                                    <a href='/'>
                                        <h1 className='text-3xl font-normal text-center'>Home</h1>
                                    </a>
                                </div>
                                <div className='w-full hidden md:block'>
                                    <a href='/'>
                                        <img className='mx-auto w-44 h-32' src={logo} alt="Logo" />
                                    </a>
                                </div>
                                <div className='my-auto w-full md:w-1/3'>
                                    <a href='/'>
                                        <h1 className='text-3xl font-normal text-center'>Visi & Misi</h1>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    <AnimatePresence>
                        {menuOpen && isMobileView && (
                            <motion.div
                                className="fixed inset-0 flex justify-end bg-white bg-opacity-90"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <FaTimes
                                    className="absolute top-11 right-4 text-black cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
                                    onClick={toggleMenu} // Using the same toggle function
                                />
                                <div className="flex flex-col gap-6 sm:gap-8 justify-center mx-6 h-full text-right">
                                    {navLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.to}
                                            className="text-black text-7xl  font-bold"
                                            onClick={toggleMenu} // Close menu when a link is clicked
                                        >
                                            {link.title}
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
