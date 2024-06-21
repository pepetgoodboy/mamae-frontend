import Call from "../../assets/images/call.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-black flex flex-col lg:flex-row sm:py-8 lg:py-20 px-8 sm:px-6 md:px-8 lg:px-20 gap-4 font-nunito pb-20 overflow-x-hidden">
      <div className="w-full lg:w-[55%]" data-aos="fade-right">
        <h2 className="text-4xl sm:text-5xl text-white font-semibold leading-[62px] sm:leading-[65px] xl:leading-[70px]">
          Kontak Kami
        </h2>
        <h2 className="text-4xl sm:text-5xl text-white font-semibold leading-[62px] sm:leading-[65px] xl:leading-[70px]">
          Kirim kami <span className="text-orange-500">pesan.</span>
        </h2>
        <p className="text-white mt-6 lg:mt-4 text-xl leading-9 lg:leading-7 xl:leading-10">
          Terima kasih telah mengunjungi situs web kami! Di Mamae Laundry, kami
          berkomitmen untuk memberikan layanan pelanggan terbaik. Jika Anda
          memiliki pertanyaan, umpan balik, atau membutuhkan bantuan, jangan
          ragu untuk menghubungi kami melalui salah satu metode di bawah ini.
        </p>
        <button className="px-8 py-4 lg:px-6 lg:py-2 text-lg lg:text-base bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium mt-10">
          Kirim Pesan
        </button>
      </div>
      <div
        className="w-full md:items-center lg:w-[45%] pt-14 lg:pt-0"
        data-aos="fade-left"
      >
        <img
          src={Call}
          alt="call"
          className="max-w-xs lg:max-w-[390px] xl:max-w-lg mx-auto rounded-xl border border-purple-500 shadow-lg shadow-purple-500/50"
        />
      </div>
    </section>
  );
};

export default Contact;
