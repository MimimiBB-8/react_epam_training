import style from './Moviegallery.module.scss'
import MovieCard from './MovieCard'
import { information } from '../../data/data.js'

function MovieGallery() {
  const movieItems = information.map((item) => (
    <MovieCard
      key={item.id}
      title={item.title}
      year={item.year}
      genre={item.genre}
      urlImg={item.url}
    />
  ))
  return <div className={style.movie_gallery}>{movieItems}</div>
}

export default MovieGallery
