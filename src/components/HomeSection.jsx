import { Link } from "react-router-dom";
import Hero1 from "../assets/images/home2.png";
import Hero2 from "../assets/images/home3.png";
import Hero3 from "../assets/images/home4.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeSection = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <section className="bg-white font-plus-jakarta-sans overflow-x-hidden">
      <div className="py-8 lg:py-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[55%] text-black" data-aos="fade-right">
          <div className="flex flex-col gap-4 lg:px-24 md:px-12 px-10 lg:py-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              No.1 Best Laundry
            </h2>
            <h2 className="text-3xl md:text-5xl font-bold">
              Partner in <span className="text-primary">Indonesia.</span>
            </h2>
            <p className="text-tertiary font-medium text-justify">
              Selamat datang di Mamae Laundry, solusi terpercaya untuk kebutuhan
              laundry Anda. Kami adalah perusahaan yang berdedikasi untuk
              memberikan layanan laundry berkualitas tinggi dengan hasil yang
              bersih, segar, dan rapi.
            </p>
            <p className="text-tertiary font-medium text-justify mb-3">
              Kami memahami betapa sibuknya kehidupan modern, itulah mengapa
              kami hadir untuk memberikan kemudahan dalam urusan membersihkan
              pakaian Anda. Dengan tenaga ahli dan peralatan canggih, kami
              menjamin setiap potongan pakaian Anda akan diperlakukan dengan
              hati-hati dan dicuci dengan standar kebersihan yang tertinggi.
            </p>
            <Link
              to="/services"
              className="w-44 px-6 py-2 rounded-lg bg-primary text-white hover:bg-blue-600 cursor-pointer"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
        <div
          className="py-16 lg:py-0 w-full lg:w-[45%] flex justify-center"
          data-aos="fade-left"
        >
          <img src={Hero1} alt="hero1" loading="lazy" className="w-full" />
        </div>
      </div>
      <div className="lg:py-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[40%] text-tertiary" data-aos="fade-right">
          <div className="flex flex-col gap-8 lg:px-24 md:px-12 px-10 lg:py-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-black">
              Susah cari jasa laundry?
            </h2>
            <p className="font-medium text-justify">
              Tenang, kami punya solusinya! Dengan layanan laundry kami yang
              cepat, bersih, dan terjangkau, Anda tidak perlu repot lagi. Hanya
              dengan sekali klik, pakaian Anda akan kembali segar dan wangi.
            </p>
          </div>
        </div>
        <div
          className="py-16 lg:py-0 px-12 sm:px-20 lg:px-12 w-full lg:w-[55%] flex justify-center"
          data-aos="fade-left"
        >
          <img src={Hero2} alt="hero2" loading="lazy" />
        </div>
      </div>
      <div className="lg:py-16 mb-14 lg:mb-0 flex flex-col lg:flex-row">
        <div
          className="py-16 lg:py-0 px-12 sm:px-20 lg:px-12 w-full lg:w-[55%] flex justify-center"
          data-aos="fade-right"
        >
          <img src={Hero3} alt="hero3" loading="lazy" />
        </div>
        <div className="w-full lg:w-[45%] text-tertiary" data-aos="fade-left">
          <div className="flex flex-col gap-8 lg:px-24 md:px-12 px-10 lg:py-20">
            <h2 className="text-4xl md:text-5xl font-semibold text-black">
              Pakaian sudah menumpuk?
            </h2>
            <p className="font-medium text-justify">
              Jangan biarkan tumpukan pakaian mengganggu hari Anda. Serahkan
              semuanya pada layanan laundry kami yang cepat dan profesional.
              Pakaian Anda akan kembali bersih, wangi, dan siap pakai dalam
              waktu singkat!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
