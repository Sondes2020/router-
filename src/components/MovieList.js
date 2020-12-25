import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({moviesList, searchByName, serchByRate}) => {
    return (
        <div className="movielist">
            {moviesList
           .filter(
            (el) =>
              el.name.toLowerCase().includes(searchByName.toLowerCase().trim()) && el.rating>=serchByRate
          )
                
            .map((movie, i) =>(
            <MovieCard key={i} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList