import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import style from './Moviegallery.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import { information } from '../../data/data.js'


function MovieGallery() {
  const value = useContext(Context)
  let movieItems
  if (value.genreFilter !== 'all') {
    movieItems = information
      .filter((item) => item.genre.includes(value.genreFilter))
      .map((item) => (
        <MovieCard
          key={item.id}
          keyID={item.id}
          title={item.title}
          year={item.year}
          genre={item.genre}
          urlImg={item.url}
        />
      ))
  } else {
    movieItems = information.map((item) => (
      <MovieCard
        key={item.id}
        keyID={item.id}
        title={item.title}
        year={item.year}
        genre={item.genre}
        urlImg={item.url}
      />
    ))
  }
  return (
    <>
      {Object.keys(movieItems).length !== 0 ?
        <div className={style.movie_gallery}>{movieItems}</div> :
        <div><h1>Movie not found</h1></div>}
    </>
  )

}

export default MovieGallery
