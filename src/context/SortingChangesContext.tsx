import { createContext, ReactNode, useState } from 'react'
interface sortingChangesContextInterface {
  genreFilter:string,
  toggleGenreFilter?: (param: any) => void,
  release?: string,
  toggleRelease?: (param: any) => void,
}

const defaultState = {
  genreFilter: 'all'
}

export const SortingChangesContext = createContext<sortingChangesContextInterface>(defaultState)

type Props = {
  children: ReactNode;
};

export const SortingChangesContextProvider = ({ children }: Props) => {
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
    <SortingChangesContext.Provider value={value}>
      {children}
    </SortingChangesContext.Provider>
  )
}

