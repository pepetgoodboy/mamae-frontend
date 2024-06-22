import { Link } from "react-router-dom";
import Hero1 from "../assets/images/hero1.png";
import Hero2 from "../assets/images/hero2.png";
import Hero3 from "../assets/images/hero3.png";
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
    <section className="bg-black font-nunito overflow-x-hidden">
      <div className="py-8 lg:py-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] text-white" data-aos="fade-right">
          <div className="flex flex-col gap-4 lg:px-24 md:px-12 px-10 lg:py-4">
            <h2 className="text-4xl md:text-5xl font-semibold">
              No.1 Best Laundry
            </h2>
            <h2 className="text-3xl md:text-5xl">Partner in Indonesia</h2>
            <p>
              Selamat datang di Mamae Laundry, solusi terpercaya untuk kebutuhan
              laundry Anda. Kami adalah perusahaan yang berdedikasi untuk
              memberikan layanan laundry berkualitas tinggi dengan hasil yang
              bersih, segar, dan rapi.
            </p>
            <p>
              Kami memahami betapa sibuknya kehidupan modern, itulah mengapa
              kami hadir untuk memberikan kemudahan dalam urusan membersihkan
              pakaian Anda. Dengan tenaga ahli dan peralatan canggih, kami
              menjamin setiap potongan pakaian Anda akan diperlakukan dengan
              hati-hati dan dicuci dengan standar kebersihan yang tertinggi.
            </p>
            <p className="mb-3">
              Jadi, tidak perlu lagi khawatir tentang urusan laundry Anda.
              Serahkan kepada kami, dan biarkan kami mengurusnya. Hubungi kami
              hari ini untuk mendapatkan layanan laundry yang handal dan
              efisien!
            </p>
            <Link
              to="/services"
              className="w-44 px-6 py-2 rounded-full font-medium bg-orange-500 hover:bg-orange-600 cursor-pointer"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
        <div
          className="py-16 lg:py-0 w-full lg:w-[40%] flex justify-center"
          data-aos="fade-left"
        >
          <img
            src={Hero1}
            alt="hero1"
            loading="lazy"
            className="w-80 rounded-lg border-2 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </div>
      </div>
      <div className="lg:py-16 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] text-white" data-aos="fade-right">
          <div className="flex flex-col gap-8 lg:px-24 md:px-12 px-10 lg:py-20">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Susah cari jasa laundry?
            </h2>
            <p>
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
          <img
            src={Hero2}
            alt="hero2"
            loading="lazy"
            className="rounded-lg border-2 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </div>
      </div>
      <div className="lg:py-16 mb-14 lg:mb-0 flex flex-col lg:flex-row">
        <div
          className="py-16 lg:py-0 px-12 sm:px-20 lg:px-12 w-full lg:w-[55%] flex justify-center"
          data-aos="fade-right"
        >
          <img
            src={Hero3}
            alt="hero3"
            loading="lazy"
            className="rounded-lg border-2 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </div>
        <div className="w-full lg:w-[45%] text-white" data-aos="fade-left">
          <div className="flex flex-col gap-8 lg:px-24 md:px-12 px-10 lg:py-20">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Pakaian sudah menumpuk?
            </h2>
            <p>
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
