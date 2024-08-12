/* eslint-disable react/prop-types */
import SidebarAdmin from "../../../components/SidebarAdmin";
import ValidateAdmin from "../../../composables/ValidateAdmin/ValidateAdmin";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";
import Spinner from "react-spinner-material";

const User = ({ url }) => {
  ValidateAdmin();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${url}/api/user/all`);
      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const removeUsers = async (userId) => {
    try {
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
      toast.error("Failed to remove user");
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
        <div className="flex flex-col w-full min-h-screen gap-4 px-10 md:px-20 py-8 font-plus-jakarta-sans bg-[#f8f8f8] text-[#b2b2b2]">
          <p className="text-black font-semibold text-2xl mb-3">Manage Users</p>
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
                            No
                          </th>
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
                            Email
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
                        {users.map((item, index) => (
                          <tr key={index} className="font-medium">
                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                              {index + 1}
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
                                <p className="font-medium">Delete</p>
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

export default User;
