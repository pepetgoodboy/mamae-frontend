/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { CSSTransition } from "react-transition-group";
import { Link, useNavigate } from "react-router-dom";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <header className="w-full sticky top-0">
      <nav className="w-full h-[78px] bg-black">
        <div className="px-6 md:px-16 lg:px-24 py-4">
          <div className="flex justify-between py-2 ">
            <div>
              <img src={logo} alt="logo" loading="lazy" width={150} />
            </div>
            <div className="py-2 hidden lg:block">
              <ul className="flex gap-8 font-outfit text-white font-medium text-sm">
                <Link to="/" className="hover:font-bold cursor-pointer">
                  Home
                </Link>
                <Link to="/services" className="hover:font-bold cursor-pointer">
                  Services
                </Link>
                <Link to="/contact" className="hover:font-bold cursor-pointer">
                  Contact Us
                </Link>
              </ul>
            </div>
            <div className="hidden lg:flex gap-10">
              {/* <div className="flex gap-4">
                <MagnifyingGlassIcon className="w-10 h-10 px-2 py-2 text-white bg-orange-500 hover:bg-orange-600 cursor-pointer rounded-full" />
                <ShoppingCartIcon className="w-10 h-10 px-2 py-2 text-white bg-orange-500 hover:bg-orange-600 cursor-pointer rounded-full" />
              </div> */}
              <div>
                {token ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex justify-center items-center py-2 px-10 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="w-full flex justify-center items-center py-2 px-10 bg-orange-500 hover:bg-orange-600 rounded-2xl text-white">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex gap-4 lg:hidden">
              {/* <ShoppingCartIcon className="w-10 h-10 px-2 py-2 text-white bg-orange-500 hover:bg-orange-600 cursor-pointer rounded-full" /> */}
              <CgMenuLeftAlt
                onClick={toggleMenu}
                className="w-10 h-10 px-2 py-2 text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="fixed bg-black/20 w-full h-screen top-0 right-0 backdrop-blur-sm"></div>
      )}
      <CSSTransition
        in={open}
        timeout={300}
        classNames="menu-transition"
        unmountOnExit
      >
        <nav
          className={`absolute right-2 top-4 w-[300px] bg-black border border-purple-500 shadow-lg px-6 py-6 space-y-6 rounded-lg ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="block px-2 py-1 text-white font-medium hover:font-bold font-outfit"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <CgClose
              onClick={toggleMenu}
              className="w-10 h-10 px-2 py-2 text-white cursor-pointer"
            />
          </div>
          <Link
            to="/services"
            className="block px-2 py-1 text-white font-medium hover:font-bold font-outfit"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-2 py-1 text-white font-medium hover:font-bold font-outfit"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <div>
            {token ? (
              <button
                onClick={handleLogout}
                className="flex justify-center items-center py-2 px-10 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="flex justify-center items-center py-2 px-10 rounded-3xl bg-orange-500 hover:bg-orange-600 text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </nav>
      </CSSTransition>
    </header>
  );
};

export default Navbar;
