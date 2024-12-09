import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import "swiper/css"

const MovieSlideSkeleton = () => (
  <div className="relative aspect-[16/9] bg-gray-800 animate-pulse rounded-xl">
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent">
      <div className="p-8 text-white flex flex-col items-center h-full justify-end">
        <div className="w-3/4 h-8 bg-gray-700 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-700 rounded mb-4"></div>
        <div className="w-40 h-12 bg-gray-700 rounded-lg"></div>
      </div>
    </div>
  </div>
)

const ThumbSkeleton = () => (
  <div className="aspect-[16/9] cursor-pointer rounded-lg overflow-hidden bg-gray-800 animate-pulse"></div>
)

const MoviesLoader = () => {
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
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="rounded-xl overflow-hidden"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <MovieSlideSkeleton />
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
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <ThumbSkeleton />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default MoviesLoader
