import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailImagesQuery, useGetDetailQuery } from '../../redux/api/movie-api'

const Detail = () => {
    const { id } = useParams()
    const { data } = useGetDetailQuery(id)
    const { data: images } = useGetDetailImagesQuery(id)

    return (
        <div className="bg-black min-h-screen text-white">
            <div className="relative h-[60vh] w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <img
                    src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
                    alt={data?.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h1 className="text-4xl font-bold mb-4">{data?.title}</h1>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                        Buy ticket
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="md:col-span-1">
                        <img 
                            src={import.meta.env.VITE_IMAGE_URL + data?.poster_path} 
                            alt={data?.title}
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-300 mb-6">{data?.overview}</p>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-bold">Release Date:</span> {data?.release_date}
                            </div>
                            <div>
                                <span className="font-bold">Runtime:</span> {data?.runtime} minutes
                            </div>
                            <div>
                                <span className="font-bold">Genres:</span> {data?.genres?.map(genre => genre.name).join(', ')}
                            </div>
                            <div>
                                <span className="font-bold">Production:</span> {data?.production_countries?.map(country => country.name).join(', ')}
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images?.backdrops?.slice(0, 12)?.map(image => (
                        <img 
                            key={image.file_path}
                            src={import.meta.env.VITE_IMAGE_URL + image.file_path} 
                            alt="Movie scene"
                            className="w-full h-40 object-cover rounded-lg shadow-md hover:opacity-75 transition-opacity duration-300"
                        />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300">
                        Buy ticket
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Detail

