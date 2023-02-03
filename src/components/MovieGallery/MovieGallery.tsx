import React, { useContext} from 'react'
import style from './Moviegallery.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import { SortingChangesContext } from '../../context/SortingChangesContext'
import { ChangeDataContext} from '../../context/ChangeDataContext'


function MovieGallery() {
  const valueData = useContext(ChangeDataContext)
  const value = useContext(SortingChangesContext)
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
