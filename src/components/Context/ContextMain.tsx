import { createContext, ReactNode, useState } from 'react'
interface ContextInterface {
  genreFilter:string,
  toggleGenreFilter?: (param: any) => void,
  release?: string,
  toggleRelease?: (param: any) => void,
}

const defaultState = {
  genreFilter: 'all'
}

export const ContextMain = createContext<ContextInterface>(defaultState)

type Props = {
  children: ReactNode;
};

export const MainProvider = ({ children }: Props) => {
  const [genreFilter, setGenreFilter] = useState(defaultState.genreFilter)
  const [release, setRelease] = useState('')

  const toggleGenreFilter = (param : any)=>{
    setGenreFilter(param)
  }
  const toggleRelease = (param : any)=>{
    setRelease(param)
  }

  const value = {
    genreFilter,
    toggleGenreFilter,
    release,
    toggleRelease,
  }

  return (
    <ContextMain.Provider value={value}>
      {children}
    </ContextMain.Provider>
  )
}

