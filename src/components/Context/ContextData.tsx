import { createContext, ReactNode, useState } from 'react'
import {information} from '../../data/data'

interface ContextDataInterface {
  movieData:  Array<any>,
  movieID: number,
  deleteMovie?: (param: any) => void,

}

const defaultState = {
  movieData : information,
  movieID: 0
}

export const ContextData = createContext<ContextDataInterface>(defaultState)

type Props = {
  children: ReactNode;
};

export const DataProvider = ({ children }: Props) => {

  const [movieData, setMovieDescription] = useState(defaultState.movieData);
  const [movieID ,setMovieID ] = useState(defaultState.movieID)


  const deleteMovie = (param : any)=>{
    setMovieID(param)
    movieData.splice(param,1)
    setMovieDescription(movieData)
  }

  const value = {
    movieData,
    movieID,
    deleteMovie,
  }

  return (
    <ContextData.Provider value={value}>
      {children}
    </ContextData.Provider>
  )
}

