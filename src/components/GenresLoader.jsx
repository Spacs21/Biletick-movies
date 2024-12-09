import React from 'react'

const GenresSkeleton = () => (
  <div className="h-10 w-24 bg-gray-700 rounded-full animate-pulse"></div>
)

const MovieCardSkeleton = () => (
  <div className="group relative">
    <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-700 animate-pulse"></div>
    <div className="mt-4 space-y-2">
      <div className="h-6 bg-gray-700 rounded animate-pulse"></div>
      <div className="h-4 w-1/4 bg-gray-700 rounded animate-pulse"></div>
    </div>
  </div>
)

const GenresLoader = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-8 w-1/4 bg-gray-700 rounded mb-4 animate-pulse"></div>
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {[...Array(10)].map((_, index) => (
              <GenresSkeleton key={index} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GenresLoader