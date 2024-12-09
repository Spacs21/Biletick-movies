import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { IoTv, IoSearchOutline, IoChevronDown } from 'react-icons/io5';
import { MdLocalMovies } from 'react-icons/md';
import { FaTicketAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from "../../assets/logo.png";
import Language from '../language/Language';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to={"/"} className="block">
              <img 
                src={logo}
                alt="BILDTICK"
                className="h-8 w-auto"
              />
            </NavLink>
          </div>
          <div className="hidden md:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex space-x-8">
              <NavLink to={"/"} className="flex flex-col items-center group px-3 py-2 text-sm transition-colors duration-200 hover:text-red-500">
                <IoTv className="w-5 h-5 mb-1 transition-transform duration-200 group-hover:scale-110" />
                <span>{t("header.home")}</span>
              </NavLink>

              <NavLink to={"/all"} className="flex flex-col items-center group px-3 py-2 text-sm transition-colors duration-200 hover:text-red-500">
                <MdLocalMovies className="w-5 h-5 mb-1 transition-transform duration-200 group-hover:scale-110" />
                <span>{t("header.genres")}</span>
              </NavLink>

              <NavLink to="#" className="flex flex-col items-center group px-3 py-2 text-sm transition-colors duration-200 hover:text-red-500">
                <FaTicketAlt className="w-5 h-5 mb-1 transition-transform duration-200 group-hover:scale-110" />
                <span>{t("header.tickets")}</span>
              </NavLink>

              <NavLink to={"/search"} className="flex flex-col items-center group px-3 py-2 text-sm transition-colors duration-200 hover:text-red-500">
                <IoSearchOutline className="w-5 h-5 mb-1 transition-transform duration-200 group-hover:scale-110" />
                <span>{t("header.search")}</span>
              </NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Language />
            <button className="bg-red-600 text-white px-7 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
              {t("sign")}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-red-500 transition-colors duration-200"
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to={"/"} className="flex items-center space-x-3 px-3 py-2 text-base hover:text-red-500 transition-colors duration-200">
            <IoTv className="w-5 h-5" />
            <span>{t("header.home")}</span>
          </NavLink>

          <NavLink to={"/all"} className="flex items-center space-x-3 px-3 py-2 text-base hover:text-red-500 transition-colors duration-200">
            <MdLocalMovies className="w-5 h-5" />
            <span>{t("header.genres")}</span>
          </NavLink>

          <NavLink to="#" className="flex items-center space-x-3 px-3 py-2 text-base hover:text-red-500 transition-colors duration-200">
            <FaTicketAlt className="w-5 h-5" />
            <span>{t("header.tickets")}</span>
          </NavLink>

          <NavLink to={"/search"} className="flex items-center space-x-3 px-3 py-2 text-base hover:text-red-500 transition-colors duration-200">
            <IoSearchOutline className="w-5 h-5" />
            <span>{t("header.search")}</span>
          </NavLink>

          <div className="border-t border-gray-800 mt-4 pt-4">
            <Language />
            <button className="w-full mt-2 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-200">
              {t("sign")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

