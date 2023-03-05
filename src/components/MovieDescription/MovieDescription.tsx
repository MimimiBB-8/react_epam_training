import { useContext, useEffect } from 'react'
import style from './Moviedescription.module.scss'
import Button from '../Button/Button'
import ImgSource from '../ImgSource/ImgSource'
import { StateVisibleContext } from '../../context/StateVisibleContext'
import { useAppSelector } from '../../hooks/useTypeRedux'
import { useDispatch } from 'react-redux'
import { fetchDescription } from '../../store/actions/description'

type MovieDitales = {
  id?: number
  title: string
  poster_path: string
  vote_average: number
  genres: []
  release_date: string
  runtime: number
  overview: string
}

const MovieDescription = () => {
  const stateVisibleValue = useContext(StateVisibleContext)

  const { data, loading, error } = useAppSelector((state) => state.description)

  const { itemId } = useAppSelector((state) => state.recervingId)

  const obj: MovieDitales = data as unknown as MovieDitales

  const dispatch = useDispatch()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(fetchDescription(itemId))
  }, [itemId])

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  function getTimeFromMins(mins: number) {
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours} h   ${minutes} min`
  }

  const handleOnClick = () => {
    if (stateVisibleValue.toggleVisible) {
      stateVisibleValue.toggleVisible(false)
    }
  }

  return (
    <div className={style.header_description}>
      <div className={style.logo_line}>
        <label className={style.logo}>
          <span>netflix</span>roulette
        </label>
        <Button classname={'return_search'} onClick={handleOnClick} />
      </div>
      <div className={style.description_wrapper}>
        <ImgSource urlProp={obj.poster_path} />
        <div className={style.description_movie}>
          <div className={style.group_name_rating}>
            <h2>{obj.title}</h2>
            <div className={style.circle_paragraph}>
              <p className={style.rating}>{obj.vote_average}</p>
            </div>
          </div>
          <p className={style.description_genre}>
            {obj.genres !== undefined ? obj.genres.join(', ') : ''}
          </p>
          <div className={style.group_year_time}>
            <h5 className={style.description_year}>
              {obj.release_date !== undefined ? obj.release_date.slice(0, 4) : ''}
            </h5>
            <h5 className={style.description_time}>{getTimeFromMins(obj.runtime)}</h5>
          </div>
          <p className={style.description}>{obj.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDescription
