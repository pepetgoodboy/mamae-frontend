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
    <div className="font-nunito">
      {/* Sidebar Desktop */}
      <div className="bg-[#0c0c0c] w-72 hidden md:block min-h-screen">
        <div className="px-5 py-8">
          <div className="flex flex-col text-[#b2b2b2]">
            <img src={logo} className="w-1/2" loading="lazy" alt="logo" />
            <p className="ml-[10px]">Admin Panel</p>
          </div>
          <div className="flex flex-col py-8 gap-5">
            <Link
              to={"/admin/add"}
              className="flex items-center gap-2 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
            >
              <IoIosAddCircleOutline className="text-[#b2b2b2] w-6 h-6" />
              <p className="text-[#b2b2b2]">Add Service</p>
            </Link>
            <Link
              to={"/admin/service"}
              className="flex items-center gap-2 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
            >
              <PiWashingMachineDuotone className="text-[#b2b2b2] w-6 h-6" />
              <p className="text-[#b2b2b2]">List Services</p>
            </Link>
            <Link
              to={"/admin/orders"}
              className="flex items-center gap-2 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
            >
              <TbReportMoney className="text-[#b2b2b2] w-6 h-6" />
              <p className="text-[#b2b2b2]">Orders</p>
            </Link>
            <Link
              to={"/admin/user"}
              className="flex items-center gap-2 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
            >
              <PiUsersThree className="text-[#b2b2b2] w-6 h-6" />
              <p className="text-[#b2b2b2]">Manage Users</p>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
            >
              <BiLogOut className="text-[#b2b2b2] w-6 h-6" />
              <p className="text-[#b2b2b2]">Logout</p>
            </button>
          </div>
          <div className="text-[#b2b2b2] px-4 flex mt-36">
            <p className="text-xs">&copy; Copyright Mamae Laundry 2024 </p>
          </div>
        </div>
      </div>
      {/* Sidebar Mobile */}
      <div className="bg-[#0c0c0c] lg:min-h-screen block md:hidden">
        <div className="flex justify-between">
          <div className="px-6 py-5">
            <img src={logo} className="h-10" alt="logo" />
          </div>
          <div className="px-8 py-7">
            <CgMenuLeftAlt
              onClick={toggleMenu}
              className="text-[#b2b2b2] w-6 h-6"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed bg-black/20 w-full h-screen top-0 right-0 backdrop-blur-sm"></div>
      )}
      <div
        className={`fixed top-7 right-5 w-56 h-60 bg-[#0c0c0c] rounded-lg border border-neutral-700 px-4 py-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="absolute top-5 right-2 justify-end">
            <CgClose onClick={toggleMenu} className="text-[#b2b2b2] w-6 h-6" />
          </div>
          <Link
            to={"/admin/add"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
          >
            <IoIosAddCircleOutline className="text-[#b2b2b2] w-6 h-6" />
            <p className="text-[#b2b2b2]">Add Service</p>
          </Link>
          <Link
            to={"/admin/service"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
          >
            <PiWashingMachineDuotone className="text-[#b2b2b2] w-6 h-6" />
            <p className="text-[#b2b2b2]">List Services</p>
          </Link>
          <Link
            to={"/admin/orders"}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
          >
            <TbReportMoney className="text-[#b2b2b2] w-6 h-6" />
            <p className="text-[#b2b2b2]">Orders</p>
          </Link>
          <Link
            to={"/admin/user"}
            className="flex items-center gap-2 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
          >
            <PiUsersThree className="text-[#b2b2b2] w-6 h-6" />
            <p className="text-[#b2b2b2]">Manage Users</p>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-11/12 hover:border hover:border-neutral-700 px-3 py-1 rounded-lg hover:bg-[#1c1c1b]"
          >
            <BiLogOut className="text-[#b2b2b2] w-6 h-6" />
            <p className="text-[#b2b2b2]">Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
