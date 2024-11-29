import React from 'react'
import { FaGooglePlay, FaApple, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'
import { GiMicrophone, GiRunningShoe } from 'react-icons/gi'
import { HiDocumentText, HiPhone } from 'react-icons/hi'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdMovie } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="text-white py-4 px-5">
    <div className="max-w-7xl mx-auto px-4 bg-[#1C1C1C] py-12 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-6">
          <img 
            src={logo}
            className="h-8 w-auto"
          />
          <div className="flex flex-col space-y-3">
            <a href="#" className="flex items-center space-x-2 bg-black rounded-md p-2 hover:bg-gray-900 transition-colors">
              <FaGooglePlay className="w-6 h-6 text-red-500" />
              <div className="text-sm">
                <div className="opacity-80">Скачать из</div>
                <div className="font-medium">Google Play</div>
              </div>
            </a>
            <a href="#" className="flex items-center space-x-2 bg-black rounded-md p-2 hover:bg-gray-900 transition-colors">
              <FaApple className="w-6 h-6 text-red-500" />
              <div className="text-sm">
                <div className="opacity-80">Загрузите в</div>
                <div className="font-medium">App Store</div>
              </div>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">О нас</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <HiDocumentText className="w-5 h-5 text-red-500" />
                <span>Публичная оферта</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <MdOutlineLocalOffer className="w-5 h-5 text-red-500" />
                <span>Реклама</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <AiOutlineQuestionCircle className="w-5 h-5 text-red-500" />
                <span>F.A.Q</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <HiPhone className="w-5 h-5 text-red-500" />
                <span>Контакты</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Категории</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <MdMovie className="w-5 h-5 text-red-500" />
                <span>Кино</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <RiMovie2Line className="w-5 h-5 text-red-500" />
                <span>Театр</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <GiMicrophone className="w-5 h-5 text-red-500" />
                <span>Концерты</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                <GiRunningShoe className="w-5 h-5 text-red-500" />
                <span>Спорт</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Связаться с нами</h3>
            <Link className="text-red-500 text-xl font-medium hover:text-red-400 transition-colors">
              +998 (95) 897-33-38
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Социальные сети</h3>
            <div className="flex space-x-4">
              <Link className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 hover:bg-slate-400 hover:bg-opacity-60 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 hover:bg-slate-400 hover:bg-opacity-60 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link className="w-10 h-10 flex items-center justify-center rounded-full text-red-500 hover:bg-slate-400 hover:bg-opacity-60 transition-colors">
                <FaYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer