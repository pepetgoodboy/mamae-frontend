/* eslint-disable react/prop-types */
import SidebarAdmin from "../../../components/SidebarAdmin";
import ValidateAdmin from "../../../composables/ValidateAdmin/ValidateAdmin";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import CurrencyIDR from "../../../composables/CurrencyIDR/CurrencyIDR";
import Spinner from "react-spinner-material";

const Orders = ({ url }) => {
  ValidateAdmin();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  };

  const removeOrders = async (orderId) => {
    try {
      const response = await axios.delete(`${url}/api/order/remove/${orderId}`);
      await fetchOrders();
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
      } else {
        toast.error(response.data.message),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          };
      }
    } catch (error) {
      toast.error("Failed to remove order");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        <SidebarAdmin />
        <div className="flex flex-col w-full min-h-screen gap-4 px-10 md:px-20 py-8 font-plus-jakarta-sans bg-[#f8f8f8] text-[#b2b2b2]">
          <p className="text-black font-semibold text-2xl mb-3">All Orders</p>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                {loading ? (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Spinner
                      radius={30}
                      color={"#3B68FF"}
                      stroke={3}
                      visible={true}
                    />
                  </div>
                ) : (
                  <div className="border border-neutral-200 rounded-lg overflow-auto">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead className="bg-primary">
                        <tr className="text-white">
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Service
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Height/Kg
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Phone
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Payment Method
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Total Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-sm"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200 bg-white">
                        {orders.map((item, index) => (
                          <tr key={index} className="font-medium">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.serviceName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.qty} Kg
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.type}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {item.method}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm ">
                              {CurrencyIDR(item.total)}
                            </td>
                            <td
                              onClick={() => removeOrders(item._id)}
                              className="whitespace-nowrap px-6 py-4 text-sm"
                            >
                              <div className="flex gap-2 items-center cursor-pointer">
                                <FaTrashCan className="text-red-500 hover:text-red-700" />
                                <p className="font-medium">
                                  Delete & Mark as Done
                                </p>
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

export default Orders;
