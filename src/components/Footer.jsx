import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="relative grid grid-cols-1 bg-gray-100 rounded-t-[50px] md:rounded-t-[100px]">
      <div className="md:space-y-0 space-y-4">
        <div className="grid grid-cols-4 space-y-10 md:space-y-8">
          <div className="mx-auto my-auto col-span-2 order-1">
            <img
              className="w-full h-full md:w-fit md:h-44 "
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="space-y-2 md:space-y-4 mx-auto col-span-2 order-2">
            <h1 className="font-extrabold text-xl md:text-2xl">Navigation</h1>
            <div>
              <Link to='/'>
                <h1 className="font-bold text-base md:text-lg">Home</h1>
              </Link>
            </div>
            <div>
              <Link to='/'>
                <h1 className="font-bold text-base md:text-lg">Visi & Misi</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-2 md:p-4 border-black border-t-2 md:border-t-4 mx-8 md:mx-96">
          <h1 className="text-center text-base md:text-lg font-bold">Jl.Pahlawan No.5, Kelurahan Mugassari Kota Semarang-Jawa Tengah 50243</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
