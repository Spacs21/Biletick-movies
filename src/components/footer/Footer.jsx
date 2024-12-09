import React from 'react';
import { FaGooglePlay, FaApple, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { GiMicrophone, GiRunningShoe } from 'react-icons/gi';
import { HiDocumentText, HiPhone } from 'react-icons/hi';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdMovie } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="text-white py-4 px-5">
      <div className="max-w-7xl mx-auto px-4 bg-[#1C1C1C] py-12 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <img src={logo} className="h-8 w-auto" />
            <div className="flex flex-col space-y-3">
              <a href="#" className="flex items-center space-x-2 bg-black rounded-md p-2 hover:bg-gray-900 transition-colors">
                <FaGooglePlay className="w-6 h-6 text-red-500" />
                <div className="text-sm">
                  <div className="opacity-80">{t('footer.download.googlePlay.label')}</div>
                  <div className="font-medium">{t('footer.download.googlePlay.platform')}</div>
                </div>
              </a>
              <a href="#" className="flex items-center space-x-2 bg-black rounded-md p-2 hover:bg-gray-900 transition-colors">
                <FaApple className="w-6 h-6 text-red-500" />
                <div className="text-sm">
                  <div className="opacity-80">{t('footer.download.appStore.label')}</div>
                  <div className="font-medium">{t('footer.download.appStore.platform')}</div>
                </div>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t('footer.about.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <HiDocumentText className="w-5 h-5 text-red-500" />
                  <span>{t('footer.about.links.offer')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <MdOutlineLocalOffer className="w-5 h-5 text-red-500" />
                  <span>{t('footer.about.links.ads')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <AiOutlineQuestionCircle className="w-5 h-5 text-red-500" />
                  <span>{t('footer.about.links.faq')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <HiPhone className="w-5 h-5 text-red-500" />
                  <span>{t('footer.about.links.contacts')}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t('footer.categories.title')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <MdMovie className="w-5 h-5 text-red-500" />
                  <span>{t('footer.categories.items.movies')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <RiMovie2Line className="w-5 h-5 text-red-500" />
                  <span>{t('footer.categories.items.theater')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <GiMicrophone className="w-5 h-5 text-red-500" />
                  <span>{t('footer.categories.items.concerts')}</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors">
                  <GiRunningShoe className="w-5 h-5 text-red-500" />
                  <span>{t('footer.categories.items.sports')}</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">{t('footer.contact.title')}</h3>
              <Link className="text-red-500 text-xl font-medium hover:text-red-400 transition-colors">
                {t('footer.contact.phone')}
              </Link>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">{t('footer.social.title')}</h3>
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
  );
};

export default Footer;
