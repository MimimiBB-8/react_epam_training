import React, { useContext, useEffect, useState } from 'react'
import style from './Moviegallery.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import { ContextMain } from '../Context/ContextMain'
import { ContextData, DataProvider } from '../Context/ContextData'


function MovieGallery() {
  const valueData = useContext(ContextData)
  const value = useContext(ContextMain)
  let movieItems = valueData.movieData

  if (value.genreFilter !== 'all') {
    movieItems = valueData.movieData
      .filter((item) => item.genre.includes(value.genreFilter))

  }
  if (value.release === 'ascending') {
    movieItems.sort((a, b) => a.year > b.year ? 1 : -1)
  }
  if (value.release === 'descending') {
    movieItems.sort((a, b) => a.year < b.year ? 1 : -1)
  }


  const newMovieItems = movieItems.map((item) => (
    <MovieCard
      key={item.id}
      keyID={item.id}
      title={item.title}
      year={item.year}
      genre={item.genre}
      urlImg={item.url}
    />
  ))

  return (
    <>
      {Object.keys(movieItems).length !== 0 ?
        <div className={style.movie_gallery}>
          {newMovieItems} </div> :
        <div><h1>Movie not found</h1></div>}
    </>
  )

}

export default MovieGallery
