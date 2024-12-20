import React from 'react'
import { movies } from '../../static'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Link } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import { useGetMovieQuery } from '../../redux/api/movie-api'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Carousel = () => {
  const {t, i18n} = useTranslation()
  const {data} = useGetMovieQuery({type: "upcoming", params: ({page : 2}), include_adult: false})
  return (
    <div>
      <div className="py-8">
      <div className="container max-w-[1300px] mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl">{t('week.title')}</h2>
          <NavLink
          to={"all"} 
            className="text-[#FF0000] hover:text-red-400 transition-colors text-sm">
            {t('week.more')} &gt;
          </NavLink>
        </div>

        <div className="relative group">
          <Swiper
           loop={true}
           autoplay={{
             delay: 3000,
             disableOnInteraction: false,
           }}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            slidesPerView={4}
            spaceBetween={24}
            className="!overflow-hidden"
          >
            {data?.results?.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="group/card">
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900">
                    <img
                      src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-medium mb-1">
                        {movie.title}
                      </h3>
                      {movie.adult && (
                        <div className="text-xs text-gray-300 mb-1">
                          18+
                        </div>
                      )}
                      <div className="text-xs text-gray-400">
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Carousel