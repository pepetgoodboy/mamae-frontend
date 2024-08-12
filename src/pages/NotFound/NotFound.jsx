import Navbar from "../../components/Navbar";
import Error from "../../assets/images/error4.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <div
        className="flex flex-col justify-center items-center font-outfit py-8"
        data-aos="fade-up"
      >
        <p className="text-white text-3xl lea font-semibold">Page Not Found</p>
        <img
          src={Error}
          alt="error"
          loading="lazy"
          className="max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
};

export default NotFound;
