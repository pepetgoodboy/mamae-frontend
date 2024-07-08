/* eslint-disable react/prop-types */
import { ForwardIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
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
    <section className="py-8 lg:py-16 font-plus-jakarta-sans bg-white text-tertiary min-h-screen">
      <div className="container mx-auto px-4">
        <div>
          <h2
            className="text-2xl md:text-4xl font-bold text-black text-center mb-8 lg:mb-24"
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
              className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-neutral-200 hover:border-primary"
            >
              <img
                src={`${url}/images/${service.image}`}
                alt={service.name}
                loading="eager"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-medium mb-2">{service.name}</h2>
                <p className=" mb-3">{CurrencyIDR(service.price)}/Kg</p>
                <p className=" text-sm mb-4 flex items-start">
                  <IoIosArrowForward className="w-5 h-5 mr-2 flex-shrink-0 text-primary" />
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
                  className="w-full py-2 px-4 text-white rounded-lg bg-primary hover:bg-blue-600 transition-colors duration-300"
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
