import React from 'react'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import movie from "../../assets/movie.png"
import {slides} from "../../static"
import { useGetMovieQuery } from '../../redux/api/movie-api'
import "swiper/css";

const Movies = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const {data} = useGetMovieQuery({type: "popular", params: ({page : 2}), include_adult: false})
    console.log(data?.results);
    
    
  return (
     <div className="container mx-auto 2xl:px-20">
      <div className="relative group">
        <Swiper
          spaceBetween={10}
          navigation={false}
          loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="rounded-xl overflow-hidden "
        >
          {data?.results?.slice(0, 5).map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative aspect-[16/9]">
                <img
                  src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent">
                    <div className=" p-8 text-white flex flex-col items-center h-full justify-end">
                      <h1 className="text-4xl font-bold mb-2">{movie.original_title}</h1>
                      <div className="flex items-center gap-2 text-sm opacity-90 mb-4">
                        <span>{movie.release_date}</span>
                        <span>•</span>
                        <span>Боевик</span>
                        <span>•</span>
                        <span>{}</span>
                        <span>•</span>
                        <span>{movie.vote_average}</span>
                      </div>
                      <button className="bg-white text-red-700 px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-white/90 transition-colors">
                        <Play className="w-5 h-5 text-red-700" />
                        Смотреть
                      </button>
                    </div>
                  </div>
              </div>
            </SwiperSlide>
          ))}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-6 h-6" />
          </button>
        </Swiper>

          <div className="mt-4">
            <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="thumbs-swiper w-[700px] max-lg:w-full"
          >
            {data?.results?.slice(0, 5).map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="aspect-[16/9] cursor-pointer rounded-lg overflow-hidden">
                  <img
                    src={import.meta.env.VITE_IMAGE_URL + movie.backdrop_path}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Movies