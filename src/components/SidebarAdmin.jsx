import logo from "../assets/images/logo.png";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiWashingMachineDuotone, PiUsersThree } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";

const SidebarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="font-plus-jakarta-sans">
      {/* Sidebar Desktop */}
      <div className="bg-white w-72 hidden md:block min-h-screen">
        <div className="px-5 py-8">
          <div className="flex flex-col text-tertiary">
            <div className="flex items-center">
              <img src={logo} className="w-1/4" alt="logo" />
              <p className="text-2xl text-black font-bold">amae</p>
            </div>
            <p className="ml-[10px] font-medium">Admin Panel</p>
          </div>
          <div className="flex flex-col py-8 gap-5">
            <Link
              to={"/admin/add"}
              className="flex items-center gap-2 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
            >
              <IoIosAddCircleOutline className="text-tertiary w-6 h-6" />
              <p className="text-tertiary">Add Service</p>
            </Link>
            <Link
              to={"/admin/service"}
              className="flex items-center gap-2 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
            >
              <PiWashingMachineDuotone className="text-tertiary w-6 h-6" />
              <p className="text-tertiary">List Services</p>
            </Link>
            <Link
              to={"/admin/orders"}
              className="flex items-center gap-2 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
            >
              <TbReportMoney className="text-tertiary w-6 h-6" />
              <p className="text-tertiary">Orders</p>
            </Link>
            <Link
              to={"/admin/user"}
              className="flex items-center gap-2 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
            >
              <PiUsersThree className="text-tertiary w-6 h-6" />
              <p className="text-tertiary">Manage Users</p>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
            >
              <BiLogOut className="text-tertiary w-6 h-6" />
              <p className="text-tertiary">Logout</p>
            </button>
          </div>
          <div className="text-tertiary px-4 flex mt-36">
            <p className="text-xs">&copy; Copyright Mamae Laundry 2024 </p>
          </div>
        </div>
      </div>
      {/* Sidebar Mobile */}
      <div className="bg-white lg:min-h-screen block md:hidden">
        <div className="flex justify-between">
          <div className="px-6 py-5 flex items-center">
            <img src={logo} className="h-10" alt="logo" />
            <p className="text-2xl text-black font-bold">amae</p>
          </div>
          <div className="px-8 py-7">
            <CgMenuLeftAlt
              onClick={toggleMenu}
              className="text-black w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed bg-black/20 w-full h-screen top-0 right-0 backdrop-blur-sm"></div>
      )}
      <div
        className={`fixed top-7 right-5 w-56 h-60 bg-white rounded-lg border border-neutral-200 px-4 py-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="absolute top-5 right-2 justify-end">
            <CgClose
              onClick={toggleMenu}
              className="text-black w-6 h-6 cursor-pointer"
            />
          </div>
          <Link
            to={"/admin/add"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
          >
            <IoIosAddCircleOutline className="text-tertiary w-6 h-6" />
            <p className="text-tertiary">Add Service</p>
          </Link>
          <Link
            to={"/admin/service"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
          >
            <PiWashingMachineDuotone className="text-tertiary w-6 h-6" />
            <p className="text-tertiary">List Services</p>
          </Link>
          <Link
            to={"/admin/orders"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
          >
            <TbReportMoney className="text-tertiary w-6 h-6" />
            <p className="text-tertiary">Orders</p>
          </Link>
          <Link
            to={"/admin/user"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
          >
            <PiUsersThree className="text-tertiary w-6 h-6" />
            <p className="text-tertiary">Manage Users</p>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-200 px-3 py-1 rounded-lg hover:bg-neutral-50"
          >
            <BiLogOut className="text-tertiary w-6 h-6" />
            <p className="text-tertiary">Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
