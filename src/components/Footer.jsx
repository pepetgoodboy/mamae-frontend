import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary h-[350px] py-8 lg:py-14 font-outfit">
        <div className="flex flex-col md:flex-row md:justify-between gap-14 md:px-24 lg:px-32">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-20">
            <div className="flex flex-col md:justify-normal justify-center items-center md:items-start text-white gap-4">
              <h3 className="font-medium">Direct Link</h3>
              <div className="flex md:flex-col justify-center md:justify-normal items-center md:items-start gap-14 md:gap-1 text-white text-sm">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
                <Link to="/services" className="hover:underline">
                  Service
                </Link>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col md:justify-normal justify-center items-center md:items-start text-white gap-4">
              <h3 className="font-medium">Contact with Us</h3>
              <div className="flex md:flex-col justify-center md:justify-normal items-center md:items-start gap-14 md:gap-1 text-white text-sm">
                <div className="flex items-center gap-1">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                  <p>info@mamaelaundry.com</p>
                </div>
                <div className="flex items-center gap-1">
                  <PhoneArrowDownLeftIcon className="w-6 h-6 text-white" />
                  <p>0812-8721-9821</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:gap-3 gap-5">
            <FaFacebook className="w-7 h-7 text-white" />
            <FiInstagram className="w-7 h-7 text-white" />
            <FaTwitter className="w-7 h-7 text-white" />
          </div>
        </div>
        <div className="px-8 md:px-24 lg:px-32 py-2 mt-6 md:mt-36 lg:mt-32">
          <p className="text-sm text-neutral-200">
            &copy; Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
