/* eslint-disable react/prop-types */
import { ForwardIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero5 from "../../assets/images/hero5.png";
import { FaRegStar } from "react-icons/fa";
import { IoPricetagOutline } from "react-icons/io5";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import CurrencyIDR from "../../composables/CurrencyIDR/CurrencyIDR";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = ({ url }) => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const getServices = async () => {
    try {
      const response = await axios.get(`${url}/api/services/list`);
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleOrder = (serviceId, serviceName, servicePrice, serviceImage) => {
    navigate(`/order/${serviceId}`, {
      state: { serviceName, servicePrice, serviceImage },
    });
  };

  useEffect(() => {
    getServices();
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <section className="py-8 lg:py-16 font-nunito bg-black text-[#b2b2b2] min-h-screen">
      <div className="container mx-auto px-4">
        <div>
          <h2
            className="px-10 md:px-20 text-2xl md:text-4xl font-bold text-white text-center mb-6 lg:mb-20"
            data-aos="fade-up"
          >
            Mamae Laundry - Best Laundry Partner
          </h2>
          <div
            className="px-10 md:px-20 pb-24 flex flex-col lg:flex-row gap-10 items-center"
            data-aos="fade-right"
          >
            <img
              src={Hero5}
              alt="hero"
              className="max-w-xs md:max-w-sm rounded-lg border-2 border-purple-500 shadow-lg shadow-purple-500/50"
            />
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              data-aos="fade-left"
            >
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <FaRegStar className="text-white text-4xl" />
                <p>Kepuasan Pelanggan</p>
                <p className="text-sm">
                  Menjadi faktor utama kami dalam memberikan kepercayaan kepada
                  pelanggan. Dengan memperhatikan kualitas laundry kami yang
                  efektif dan efisien
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <IoPricetagOutline className="text-white text-4xl" />
                <p>Biaya Tambahan</p>
                <p className="text-sm">
                  Di Mamae Laundry, kami mengenakan biaya harga tetap sesuai
                  pesanan. Ini berarti kami hanya mengenakan biaya ketika
                  layanan laundry Anda sudah dikonfirmasi
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <LiaHandHoldingUsdSolid className="text-white text-4xl" />
                <p>Gratis Pengiriman</p>
                <p className="text-sm">
                  Kami menyediakan layanan gratis pengiriman berdasarkan jarak
                  tempuh pengiriman ke tujuanmu sesuai cabang Mamae Laundry
                </p>
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-2">
                <HiOutlineHandThumbUp className="text-white text-4xl" />
                <p>Kualitas Terbaik</p>
                <p className="text-sm">
                  Di Mamae Laundry, kami mempekerjakan karyawan kami dengan
                  pengalaman yang baik sehingga dapat memberikan pelayanan yang
                  profesional dan hasil yang berkualitas
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className="text-2xl md:text-4xl font-bold text-white text-center mb-8 lg:mb-24"
            data-aos="flip-up"
          >
            Layanan Kami
          </h2>
        </div>
        <div
          className="px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10"
          data-aos="zoom-in"
        >
          {services.map((service) => (
            <div
              key={service._id}
              className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-purple-500 shadow-md shadow-purple-500/50"
            >
              <img
                src={`${url}/images/${service.image}`}
                alt={service.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
                <p className=" mb-3">{CurrencyIDR(service.price)}/Kg</p>
                <p className=" text-sm mb-4 flex items-start">
                  <ForwardIcon className="w-5 h-5 mr-2 flex-shrink-0 " />
                  <span>{service.description}</span>
                </p>
                <button
                  onClick={() =>
                    handleOrder(
                      service._id,
                      service.name,
                      service.price,
                      service.image
                    )
                  }
                  className="w-full py-2 px-4 border border-[#b2b2b2] hover:font-bold text-white font-semibold rounded-md  transition-colors duration-300"
                >
                  Order Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
