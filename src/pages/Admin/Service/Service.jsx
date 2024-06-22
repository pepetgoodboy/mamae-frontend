/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { FaTrashCan } from "react-icons/fa6";
import SidebarAdmin from "../../../components/SidebarAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ValidateAdmin from "../../../composables/ValidateAdmin/ValidateAdmin";
import CurrencyIDR from "../../../composables/CurrencyIDR/CurrencyIDR";
import Spinner from "react-spinner-material";

const Service = ({ url }) => {
  ValidateAdmin();
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchService = async () => {
    try {
      const response = await axios.get(`${url}/api/services/list`);
      if (response.data.success) {
        setService(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch services");
    } finally {
      setLoading(false);
    }
  };

  const removeService = async (serviceId) => {
    try {
      const response = await axios.delete(
        `${url}/api/services/remove/${serviceId}`
      );
      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        await fetchService();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to remove service");
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        <SidebarAdmin />
        <div className="flex flex-col w-full min-h-screen gap-4 px-10 md:px-20 py-8 font-nunito bg-[#111111] text-[#b2b2b2]">
          <p className="text-white font-medium text-2xl mb-3">All Service</p>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                {loading ? (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Spinner
                      radius={30}
                      color={"#ffffff"}
                      stroke={3}
                      visible={true}
                    />
                  </div>
                ) : (
                  <div className="border border-neutral-700 rounded-lg overflow-auto">
                    <table className="min-w-full divide-y divide-neutral-700">
                      <thead className="bg-black/30">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-bold uppercase"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-bold uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-bold uppercase"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-bold uppercase"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-700">
                        {service.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                              <img
                                src={`${url}/images/` + item.image}
                                alt="List Service"
                                className="w-14 md:w-16 rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {CurrencyIDR(item.price)}
                            </td>
                            <td
                              onClick={() => removeService(item._id)}
                              className="whitespace-nowrap px-6 py-4 text-sm"
                            >
                              <div className="flex gap-2 items-center cursor-pointer">
                                <FaTrashCan className="text-red-500 hover:text-red-700" />
                                <p className="font-medium text-white">Delete</p>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
