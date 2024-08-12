/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

const PlaceOrder = ({ url }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const servicePrice = location.state.servicePrice;
  const serviceName = location.state.serviceName;
  const serviceImage = location.state.serviceImage;

  const validateUser = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const [name, setName] = useState("");
  const [orderQuantity, setOrderQuantity] = useState(1);
  const regulerFee = 10000;
  const expressFee = 15000;
  const superExpressFee = 20000;
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("");
  const [totalPesanan, setTotalPesanan] = useState(servicePrice);

  const handleOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      name,
      serviceName,
      orderQuantity,
      type,
      phone,
      method,
      totalPesanan,
    };

    console.log(orderData);

    try {
      const response = await axios.post(`${url}/api/order/add`, {
        name: name,
        serviceName: serviceName,
        qty: orderQuantity,
        type: type,
        phone: phone,
        method: method,
        total: totalPesanan,
      });

      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        await navigate("/services");
      } else {
        toast.error(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("An error occurred while saving the order.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  useEffect(() => {
    validateUser();

    let updatedTotalPesanan;
    if (type === "Reguler") {
      updatedTotalPesanan = servicePrice * orderQuantity + regulerFee;
    } else if (type === "Express") {
      updatedTotalPesanan = servicePrice * orderQuantity + expressFee;
    } else if (type === "Super Express") {
      updatedTotalPesanan = servicePrice * orderQuantity + superExpressFee;
    } else {
      updatedTotalPesanan = servicePrice * orderQuantity;
    }

    setTotalPesanan(updatedTotalPesanan);

    Aos.init({
      offset: 200,
      duration: 1000,
    });
  }, [type, orderQuantity, servicePrice]);

  return (
    <div>
      <div className="w-full h-full bg-white pb-28">
        <div className="flex justify-center py-10">
          <h2 className="text-black font-plus-jakarta-sans font-semibold text-3xl">
            Place Order
          </h2>
        </div>
        <div className="flex flex-col md:items-center md:justify-center md:flex-row gap-4 md:gap-8 lg:gap-20 px-24 text-tertiary font-plus-jakarta-sans">
          <img
            src={`${url}/images/${serviceImage}`}
            alt={serviceName}
            loading="lazy"
            className="max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg rounded-xl border border-neutral-200"
            data-aos="fade-right"
          />
          <div className="flex flex-col gap-7" data-aos="fade-left">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-2xl">{serviceName}</p>
              <p className="text-xl">Rp. {servicePrice}/Kg</p>
            </div>
            <div className="flex">
              <form
                onSubmit={handleOrder}
                className="flex flex-col gap-2 text-[#b2b2b2]"
              >
                <label htmlFor="namaPemesan">Nama Pemesan</label>
                <input
                  id="namaPemesan"
                  type="text"
                  required
                  placeholder="Nama"
                  className="border border-neutral-200 rounded-lg px-4 py-2 text-[#b2b2b2] bg-white max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="jumlahPesanan">Jumlah Pesanan (Kg)</label>
                <input
                  id="jumlahPesanan"
                  type="number"
                  min="1"
                  required
                  placeholder="4"
                  className="border border-neutral-200 rounded-lg px-4 py-2 text-[#b2b2b2] bg-white max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg"
                  value={orderQuantity}
                  onChange={(e) => setOrderQuantity(e.target.value)}
                />
                <label htmlFor="phone">No.Whatsapp</label>
                <input
                  id="phone"
                  type="number"
                  min="11"
                  required
                  placeholder="0857********"
                  className="border border-neutral-200 rounded-lg px-4 py-2 text-[#b2b2b2] bg-white max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label htmlFor="jenisPesanan">Jenis Pesanan</label>
                <select
                  id="jenisPesanan"
                  value={type}
                  required
                  onChange={(e) => {
                    const selectedType = e.target.value;
                    if (selectedType === "Reguler") {
                      setType("Reguler");
                    } else if (selectedType === "Express") {
                      setType("Express");
                    } else if (selectedType === "Super Express") {
                      setType("Super Express");
                    }
                  }}
                  className="border border-neutral-200 rounded-lg px-4 py-2 text-[#b2b2b2] bg-white max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg"
                >
                  <option disabled>Pilih</option>
                  <option value="Reguler">Reguler</option>
                  <option value="Express">Express</option>
                  <option value="Super Express">Super Express</option>
                </select>
                <label htmlFor="metodePembayaran">Metode Pembayaran</label>
                <select
                  id="metodePembayaran"
                  value={method}
                  required
                  onChange={(e) => setMethod(e.target.value)}
                  className="border border-neutral-200 rounded-lg px-4 py-2 text-[#b2b2b2] bg-white max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg"
                >
                  <option disabled>Pilih</option>
                  <option value="COD">Cash On Delivery</option>
                  <option value="Transfer">Transfer Bank</option>
                </select>
                <div className="flex flex-col gap-2">
                  <p>Total Pesanan : Rp. {totalPesanan} </p>
                  <button
                    type="submit"
                    className="text-white mt-4 max-w-md md:max-w-sm lg:max-w-[390px] xl:max-w-lg flex justify-center items-center py-2 px-6 rounded-lg bg-primary hover:bg-blue-600"
                  >
                    Pesan Sekarang
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
