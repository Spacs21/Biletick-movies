import React from 'react'
import { useGetMovieQuery } from '../../redux/api/movie-api'

const Content = () => {
    const { data } = useGetMovieQuery({
        type: "popular",
        params: { page: 2, include_adult: false, without_genres: "10749,18" }
      });      
    return (
        <div className='container mx-auto px-5 py-8 bg-black min-h-screen'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data?.results?.map((movie) => (
                    <div key={movie.id} className="group relative">
                        <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-900">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                <button className="bg-primary text-red-500 text-primary-foreground px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-lg font-semibold text-white truncate group-hover:text-primary transition-colors duration-300">
                                {movie.title}
                            </h3>
                            <p className="text-sm text-gray-400">
                                {movie.genre_ids.slice(0, 2).join(', ')}
                            </p>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <span>{new Date(movie.release_date).getFullYear()}</span>
                                <span>•</span>
                                <span>{movie.vote_average.toFixed(1)} Rating</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Content

