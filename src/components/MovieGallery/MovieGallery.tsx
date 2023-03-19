import { useEffect } from 'react'
import style from './Moviegallery.module.scss'
import MovieCard from '../MovieCard/MovieCard'
import { useAppSelector } from '../../hooks/useTypeRedux'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../store/actions/data'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'

export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: Date;
  genres: string[];
  budget: number;
  overview: string;
  revenue: number;
  runtime: number;
  tagline: string;
  voteAverage: number;
  voteCount: number;
}

interface childrenProps {
  children: React.ReactNode;
}

const MovieGallery = ({ children }: childrenProps) => {
  return (
    <div className={style.movie_gallery}>
      {children ? children : 'No films found'}
    </div>
  )
}


export default MovieGallery