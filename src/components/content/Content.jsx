import React from 'react'
import { useGetMovieQuery } from '../../redux/api/movie-api'
import { useNavigate } from 'react-router-dom'

const Content = ({data}) => { 
    const navigate = useNavigate()
    return (
        <div className='container mx-auto px-5 py-8 bg-black min-h-screen'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.results?.map(movie => (
                <div key={movie.id} className="group relative">
                    <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-900">
                    <img
                        src={import.meta.env.VITE_IMAGE_URL + movie.poster_path}
                        alt={movie.title}
                        className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-110 cursor-pointer"
                        onClick={() => navigate(`/movie/${movie.id}`)}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                        <button 
                        className="bg-red-600 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        >
                        View Details
                        </button>
                    </div>
                    </div>
                    <div className="mt-4 space-y-2">
                    <h3 className="text-lg font-semibold truncate group-hover:text-red-500 transition-colors duration-300">
                        {movie.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {movie.vote_average.toFixed(1)}
                        </span>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Content

