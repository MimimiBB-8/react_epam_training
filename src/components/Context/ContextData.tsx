import { createContext, ReactNode, useState } from 'react'
import {information} from '../../data/data'

interface ContextDataInterface {
  movieData:  Array<any>,
  movieID: number,
  deleteMovie?: (param: any) => void,
  newMovie: object,
  addNewMovie?: (param: any) => void,
}

const defaultState = {
  movieData : information,
  movieID: 0,
  newMovie: {},
}

export const ContextData = createContext<ContextDataInterface>(defaultState)

type Props = {
  children: ReactNode;
};

export const DataProvider = ({ children }: Props) => {

  const [movieData, setMovieDescription] = useState(defaultState.movieData);
  const [movieID ,setMovieID ] = useState(defaultState.movieID);
  const [newMovie ,setNewMovie] = useState(defaultState.newMovie);

  const deleteMovie = (param : any)=>{
    setMovieID(param)
    movieData.splice(param,1)
    setMovieDescription(movieData)
  }

  const addNewMovie = (param : any)=>{
    const  idContent = movieData.some((item)=> item.id === param[0].id)
    if(!idContent){
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
    addNewMovie
  }

  return (
    <ContextData.Provider value={value}>
      {children}
    </ContextData.Provider>
  )
}

