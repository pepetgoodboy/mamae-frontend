import Call from "../../assets/images/contact.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  const linkWa = "https://wa.me/6281931707184";

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-white flex flex-col lg:flex-row sm:py-8 lg:py-24 px-8 sm:px-6 md:px-8 lg:px-20 md:gap-4 font-plus-jakarta-sans pb-20 overflow-x-hidden">
      <div className="w-full lg:w-[55%]" data-aos="fade-right">
        <h2 className="text-4xl sm:text-5xl text-black font-semibold leading-[62px] sm:leading-[65px] xl:leading-[70px]">
          Kontak Kami
        </h2>
        <h2 className="text-4xl sm:text-5xl font-semibold leading-[62px] sm:leading-[65px] xl:leading-[70px]">
          Kirim kami <span className="text-primary">pesan.</span>
        </h2>
        <p className="text-tertiary font-medium mt-6 lg:mt-4 text-xl leading-9 lg:leading-7 xl:leading-8 text-justify">
          Terima kasih telah mengunjungi situs web kami! Di Mamae Laundry, kami
          berkomitmen untuk memberikan layanan pelanggan terbaik. Jika Anda
          memiliki pertanyaan, umpan balik, atau membutuhkan bantuan, jangan
          ragu untuk menghubungi kami melalui salah satu metode di bawah ini.
        </p>
        <Link to={linkWa} target="_blank">
          <button className="px-6 py-2 text-lg lg:text-base bg-primary hover:bg-blue-600 text-white rounded-lg mt-6">
            Kirim Pesan
          </button>
        </Link>
      </div>
      <div
        className="w-full md:items-center lg:w-[45%] pt-14 lg:pt-0"
        data-aos="fade-left"
      >
        <img
          src={Call}
          alt="call"
          loading="lazy"
          className="max-w-xs lg:max-w-[390px] xl:max-w-lg mx-auto"
        />
      </div>
    </section>
  );
};

export default Contact;
