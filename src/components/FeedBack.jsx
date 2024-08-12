import { UserCircleIcon } from "@heroicons/react/24/solid";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeedBack = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, []);

  return (
    <section className="pt-16 font-plus-jakarta-sans bg-white">
      <div className="image-feedback bg-cover bg-center bg-no-repeat w-full h-auto border-t-4 border-b-4 border-primary shadow-md shadow-primary/50">
        <div className="px-12 md:px-24 lg:px-48 xl:px-64 py-12 flex flex-col gap-8">
          <div
            className="w-72 h-auto px-6 py-4 bg-white rounded-lg border border-neutral-200"
            data-aos="fade-right"
          >
            <p className="text-sm">
              Udah beberapa kali pake layanan disini saya sangat puas. Ga perlu
              waktu lama cucian beres tinggal pake.
            </p>
            <div className="mt-1 flex gap-2 items-center">
              <UserCircleIcon className="w-8 h-8 text-gray-600" />
              <p className="text-xs text-gray-500">
                Sisca Kohl - Karyawan, 28 tahun
              </p>
            </div>
          </div>
          <div className="flex justify-end" data-aos="fade-left">
            <div className="w-72 h-auto px-6 py-4 bg-white rounded-lg border border-neutral-200">
              <p className="text-sm">
                Saya sangat puas dengan layanan laundry dari Mamae Laundry.
                Pakaian saya selalu bersih dan rapi setiap kali diambil.
                Harganya juga sangat terjangkau. Sangat direkomendasikan!.
              </p>
              <div className="mt-1 flex gap-2 items-center">
                <UserCircleIcon className="w-8 h-8 text-gray-600" />
                <p className="text-xs text-gray-500">
                  Fahmi Sahwal - Gamers, 21 tahun
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-72 h-auto px-6 py-4 bg-white rounded-lg border border-neutral-200"
            data-aos="fade-right"
          >
            <p className="text-sm">
              Saya baru pertama kali mencoba jasa laundry di Mamae Laundry dan
              saya sangat terkesan! Pakaian saya dikembalikan dalam kondisi
              sempurna, seperti baru lagi. Prosesnya juga sangat mudah dan
              praktis, saya tinggal mengirim pakaian dan mereka mengantarkannya
              kembali bersih dan rapi. Terima kasih banyak!.
            </p>
            <div className="mt-1 flex gap-2 items-center">
              <UserCircleIcon className="w-8 h-8 text-gray-600" />
              <p className="text-xs text-gray-500">
                Feri Salim - Mahasiswa, 20 tahun
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
