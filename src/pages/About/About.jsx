import Hero5 from "../../assets/images/home5.png";
import Hero6 from "../../assets/images/customer.png";
import Hero7 from "../../assets/images/biaya.png";
import Hero8 from "../../assets/images/delivery.png";
import Hero9 from "../../assets/images/about.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-8 lg:py-16 font-plus-jakarta-sans bg-white text-tertiary min-h-screen">
      <div className="flex flex-col gap-4">
        <h2
          className="px-10 md:px-20 text-2xl md:text-4xl font-bold text-black text-center mb-6"
          data-aos="fade-down"
        >
          About
        </h2>
        <div className="flex flex-col lg:flex-row px-10 md:px-20 gap-10">
          <div className="items-center w-full lg:w-[45%]" data-aos="fade-right">
            <img src={Hero9} alt="hero" loading="lazy" />
          </div>
          <div
            className="flex flex-col gap-4 pb-28 w-full lg:w-[55%] justify-end"
            data-aos="fade-left"
          >
            <p className="text-justify font-medium indent-8 justify-end">
              Mamae Laundry adalah pusat pelayanan laundry yang menghadirkan
              standar baru dalam kebersihan dan kualitas. Sejak awal, kami telah
              berkomitmen untuk menjadi yang terbaik dalam industri ini dengan
              kombinasi antara teknologi mutakhir dan keahlian dalam perawatan
              pakaian. Di Mamae Laundry, kami mengerti bahwa kebersihan dan
              kenyamanan pakaian Anda adalah prioritas utama. Dengan itu, tim
              berpengalaman kami tidak hanya menghadirkan keahlian dalam proses
              pencucian dan perawatan, tetapi juga memberikan perhatian khusus
              terhadap detail dan kebutuhan khusus Anda.
            </p>
            <p className="text-justify font-medium indent-8 justify-end">
              Kami menggunakan metode pencucian yang ramah lingkungan dan produk
              pembersih terbaik untuk memastikan bahwa pakaian Anda tidak hanya
              bersih tetapi juga terjaga kualitasnya. Setiap langkah dalam
              proses pencucian dijalankan dengan cermat untuk memastikan bahwa
              setiap pakaian kembali ke tangan Anda dalam kondisi optimal. Kami
              bangga dengan dedikasi kami untuk kepuasan pelanggan, dan kami
              berkomitmen untuk memberikan layanan yang cepat, handal, dan
              sesuai dengan harapan. Apakah itu pakaian sehari-hari, pakaian
              khusus, atau linen rumah tangga, Mamae Laundry siap membantu Anda
              menjaga kualitas dan kebersihan pakaian Anda dengan layanan
              terbaik. Hubungi kami hari ini untuk memulai pengalaman laundry
              yang tak tertandingi. Mamae Laundry hadir untuk memastikan bahwa
              Anda mendapatkan hasil terbaik setiap kali menggunakan layanan
              kami.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2
          className="px-10 md:px-20 text-2xl md:text-4xl font-bold text-black text-center mb-6"
          data-aos="fade-up"
        >
          Mengapa Mamae Laundry?
        </h2>
        <div className="flex flex-col lg:flex-row px-10 md:px-20 py-10 gap-10">
          <div className="items-center w-full lg:w-[45%]" data-aos="fade-right">
            <img src={Hero6} alt="hero" loading="lazy" />
          </div>
          <div
            className="w-full lg:w-[55%] flex flex-col gap-4 md:px-14 justify-center"
            data-aos="fade-left"
          >
            <h3 className="font-semibold text-black text-xl md:text-3xl">
              Kepuasan Pelanggan
            </h3>
            <p className="text-justify font-medium mb-2">
              Menjadi faktor utama kami dalam memberikan kepercayaan kepada
              pelanggan. Dengan memperhatikan kualitas laundry kami yang efektif
              dan efisien
            </p>
            <Link
              to="/services"
              className="flex items-center gap-2 justify-center bg-white border border-primary text-primary font-bold py-2 px-4 rounded-lg w-48"
            >
              <p>Pesan Sekarang</p>
              <IoIosArrowForward className="text-primary" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-10 md:px-20 py-16 lg:py-0 gap-16 md:gap-10">
          <div
            className="w-full lg:w-[55%] flex flex-col gap-4 md:px-14 justify-center"
            data-aos="fade-right"
          >
            <h3 className="font-semibold text-black text-xl md:text-3xl">
              Biaya Tambahan
            </h3>
            <p className="text-justify font-medium mb-2">
              Di Mamae Laundry, kami mengenakan biaya harga tetap sesuai
              pesanan. Ini berarti kami hanya mengenakan biaya ketika layanan
              laundry Anda sudah dikonfirmasi
            </p>
            <Link
              to="/services"
              className="flex items-center gap-2 justify-center bg-white border border-primary text-primary font-bold py-2 px-4 rounded-lg w-48"
            >
              <p>Pesan Sekarang</p>
              <IoIosArrowForward className="text-primary" />
            </Link>
          </div>
          <div className="items-center w-full lg:w-[45%]" data-aos="fade-left">
            <img src={Hero7} alt="hero" loading="lazy" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-10 md:px-20 py-16 lg:py-0 gap-10">
          <div className="items-center w-full lg:w-[45%]" data-aos="fade-right">
            <img src={Hero8} alt="hero" loading="lazy" />
          </div>
          <div
            className="w-full lg:w-[55%] flex flex-col gap-4 md:px-14 justify-center"
            data-aos="fade-left"
          >
            <h3 className="font-semibold text-black text-xl md:text-3xl">
              Gratis Pengiriman
            </h3>
            <p className="text-justify font-medium mb-2">
              Kami menyediakan layanan gratis pengiriman berdasarkan jarak
              tempuh pengiriman ke tujuanmu sesuai cabang Mamae Laundry
            </p>
            <Link
              to="/services"
              className="flex items-center gap-2 justify-center bg-white border border-primary text-primary font-bold py-2 px-4 rounded-lg w-48"
            >
              <p>Pesan Sekarang</p>
              <IoIosArrowForward className="text-primary" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row px-10 md:px-20 py-16 lg:py-0 gap-16 md:gap-10">
          <div
            className="w-full lg:w-[55%] flex flex-col gap-4 md:px-14 justify-center"
            data-aos="fade-right"
          >
            <h3 className="font-semibold text-black text-xl md:text-3xl">
              Kualitas Terbaik
            </h3>
            <p className="text-justify font-medium mb-2">
              Di Mamae Laundry, kami mempekerjakan karyawan kami dengan
              pengalaman yang baik sehingga dapat memberikan pelayanan yang
              profesional dan hasil yang berkualitas
            </p>
            <Link
              to="/services"
              className="flex items-center gap-2 justify-center bg-white border border-primary text-primary font-bold py-2 px-4 rounded-lg w-48"
            >
              <p>Pesan Sekarang</p>
              <IoIosArrowForward className="text-primary" />
            </Link>
          </div>
          <div className="items-center w-full lg:w-[45%]" data-aos="fade-left">
            <img src={Hero5} alt="hero" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
