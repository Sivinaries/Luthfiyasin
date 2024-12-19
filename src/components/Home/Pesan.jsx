import { useState, useEffect } from "react";
import api from "../../api";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pusher from "pusher-js";

function Pesan() {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await api.get('/message');
                setMessage(response.data.messages);
            } catch (error) {
                console.error("Error fetching data:", error);
                setMessage([]);
            }
        };

        fetchMessage();

        const pusher = new Pusher("ivpc4objrm2qhg4k3uhy", {
            cluster: "",
            enabledTransports: ['ws'],
            forceTLS: false,
            wsHost: "127.0.0.1",
            wsPort: "8080"
        });

        const channel = pusher.subscribe("messages");

        channel.bind("new-message", function (data) {
            setMessage((prevMessages) => [
                ...prevMessages,
                data
            ]);
        });

        return () => {
            pusher.unsubscribe("messages");
        };
    }, []);

    const settings = {
        dots: false, // Show navigation dots
        infinite: true, // Infinite loop of slides
        speed: 500, // Slide transition speed
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Delay between slides
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
    };

    return (
        <div className="grid grid-cols-1 bg-white">
            <div className="md:flex block md:justify-between space-y-10 mx-4 xl:mx-20 my-20 md:my-44">
                <div className="md:w-1/2 my-auto">
                    <h1 className="text-blue-500 font-extrabold text-3xl text-center md:text-left md:text-7xl">Pengarepan yang Menginspirasi Perubahan Jateng</h1>
                </div>
                <div className="md:w-1/2 mx-auto border p-4 md:p-8 rounded-xl my-auto">
                    {message.length === 0 ? (
                        <p className="text-center">No messages available.</p>
                    ) : (
                        <Slider {...settings}>
                            {message.map((item, index) => (
                                <div key={index} className="space-y-4 md:space-y-8">
                                    <p className="text-xl font-extralight">"{item.pengarepan}"</p> {/* Display corresponding 'pengarepan' */}
                                    <h1 className="text-xl font-bold">{item.nama}</h1> {/* Display 'nama' */}
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Pesan;
