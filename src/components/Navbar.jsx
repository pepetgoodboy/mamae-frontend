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
      <nav className="w-full h-[78px] bg-white">
        <div className="px-6 md:px-16 lg:px-24 py-4">
          <div className="flex justify-between py-2 ">
            <div className="flex items-center font-plus-jakarta-sans font-bold text-black/85 text-3xl">
              <img src={logo} alt="logo" className="w-14" />
              <p>amae</p>
            </div>
            <div className="py-2 hidden lg:block">
              <ul className="flex gap-8 font-plus-jakarta-sans font-semibold text-sm text-tertiary">
                <Link to="/" className="cursor-pointer hover:text-primary">
                  Home
                </Link>
                <Link
                  to="/services"
                  className="cursor-pointer hover:text-primary"
                >
                  Services
                </Link>
                <Link to="/about" className="cursor-pointer hover:text-primary">
                  About
                </Link>
                <Link
                  to="/contact"
                  className="cursor-pointer hover:text-primary"
                >
                  Contact Us
                </Link>
              </ul>
            </div>
            <div className="hidden lg:flex gap-10">
              <div className="font-plus-jakarta-sans">
                {token ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex justify-center items-center py-2 px-10 rounded-lg bg-primary hover:bg-blue-600 text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className="w-full flex justify-center items-center py-2 px-10 bg-primary hover:bg-blue-600 rounded-lg text-white">
                      Login
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="flex gap-4 lg:hidden">
              <CgMenuLeftAlt
                onClick={toggleMenu}
                className="w-10 h-10 px-2 py-2 text-black/85 cursor-pointer"
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
          className={`absolute right-2 top-4 w-[300px] bg-white border border-neutral-400 shadow-lg px-6 py-6 space-y-6 rounded-lg ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="block px-2 py-1 text-tertiary font-semibold hover:text-primary font-plus-jakarta-sans"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <CgClose
              onClick={toggleMenu}
              className="w-10 h-10 px-2 py-2 text-black/85 cursor-pointer"
            />
          </div>
          <Link
            to="/services"
            className="block px-2 py-1 text-tertiary font-semibold hover:text-primary font-plus-jakarta-sans"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block px-2 py-1 text-tertiary font-semibold hover:text-primary font-plus-jakarta-sans"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-2 py-1 text-tertiary font-semibold hover:text-primary font-plus-jakarta-sans"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <div className="font-plus-jakarta-sans">
            {token ? (
              <button
                onClick={handleLogout}
                className="flex justify-center items-center py-2 px-10 rounded-lg bg-primary hover:bg-blue-600 text-white"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="flex justify-center items-center py-2 px-10 rounded-lg bg-primary hover:bg-blue-600 text-white">
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
