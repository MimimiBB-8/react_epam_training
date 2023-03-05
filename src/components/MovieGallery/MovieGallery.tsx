import { useEffect } from 'react'
import style from './Moviegallery.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import { useAppSelector } from '../../hooks/useTypeRedux'
import { useDispatch } from 'react-redux'
import { fetchData} from '../../store/actions/data'
import { useSearchParams } from 'react-router-dom'
import { useLocation } from 'react-router'


function MovieGallery() {
  const { data, loading, error } = useAppSelector((state) => state.data)

  const dispatch = useDispatch()  
  const idDelete = useAppSelector((state) => state.recervingId)

  const [searchParams, setsearchParam] = useSearchParams()

  const {search} = useLocation()
  const query = searchParams.get('genre');
  const newSearchParam = search.replace(/\?/gi, '&').replace(/genre/i, 'filter');
  
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchData(newSearchParam))
  }, [idDelete, searchParams])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  const newMovieItems = data.map((item: any) => (
    <MovieCard
      key={item.id}
      keyID={item.id}
      title={item.title}
      year={item.release_date}
      genres={item.genres.join(', ')}
      urlImg={item.poster_path}
    />
  ))

  return (
    <>
      {Object.keys(newMovieItems).length !== 0 ? (
        <div className={style.movie_gallery}>{newMovieItems} </div>
      ) : (
        <div>
          <h1>Movie not found</h1>
        </div>
      )}
    </>
  )
}

export default MovieGallery
