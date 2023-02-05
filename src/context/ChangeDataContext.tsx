import { createContext, ReactNode, useState } from 'react'
import { information } from '../data/data'

interface changeDataContextInterface {
  movieData: Array<any>
  movieID: number
  deleteMovie?: (param: number) => void
  newMovie: object
  addNewMovie?: (param: any) => void
}

const defaultState = {
  movieData: information,
  movieID: 0,
  newMovie: {},
}

export const ChangeDataContext = createContext<changeDataContextInterface>(defaultState)

type Props = {
  children: ReactNode
}

export const ChangeDataContextProvider = ({ children }: Props) => {
  const [movieData, setMovieDescription] = useState(defaultState.movieData)
  const [movieID, setMovieID] = useState(defaultState.movieID)
  const [newMovie, setNewMovie] = useState(defaultState.newMovie)

  const deleteMovie = (param: number) => {
    setMovieID(param)
    const changeData = movieData.filter((item) => item.id !== param)
    setMovieDescription(changeData)
  }

  const addNewMovie = (param: any) => {
    const idContent = movieData.some((item) => item.id === param[0].id)
    if (!idContent) {
      movieData.push(param[0])
    }
    setNewMovie(param)
    setMovieDescription(movieData)
  }

  const value = {
    movieData,
    movieID,
    deleteMovie,
    newMovie,
    addNewMovie,
  }

  return <ChangeDataContext.Provider value={value}>{children}</ChangeDataContext.Provider>
}
