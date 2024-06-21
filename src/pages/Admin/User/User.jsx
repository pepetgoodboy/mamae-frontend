/* eslint-disable react/prop-types */
import SidebarAdmin from "../../../components/SidebarAdmin";
import ValidateAdmin from "../../../composables/ValidateAdmin/ValidateAdmin";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

const User = ({ url }) => {
  ValidateAdmin();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`${url}/api/user/all`);
    if (response.data.success) {
      setUsers(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const removeUsers = async (userId) => {
    const response = await axios.delete(`${url}/api/user/remove/${userId}`);
    await getUsers();
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
          theme: "dark",
          transition: Bounce,
        };
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div className="flex flex-col md:flex-row">
        <SidebarAdmin />
        <div className="flex flex-col w-full min-h-screen gap-4 px-10 md:px-20 py-8 font-nunito bg-[#111111] text-[#b2b2b2]">
          <p className="text-white font-medium text-2xl mb-3">Manage Users</p>
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border border-neutral-700 rounded-lg overflow-auto">
                  <table className="min-w-full divide-y divide-neutral-700">
                    <thead className="bg-black/30">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-bold uppercase"
                        >
                          Id
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
                          Email
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
                      {users.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                            {item._id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            {item.email}
                          </td>
                          <td
                            onClick={() => removeUsers(item._id)}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
