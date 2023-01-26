import { createContext, ReactNode, useState } from 'react'

interface IThemeContext {
  dark: boolean,
  toggleDark?: () => void,
}

const defaultState = {
  dark: false
}

export const Context = createContext<IThemeContext>(defaultState)

type Props = {
  children: ReactNode;
};
export const ThemeProvider = ({ children }: Props) => {
  const [dark, setDark] = useState(defaultState.dark)
  const toggleDark=()=>{
    setDark(!dark)
  }
  return (
    <Context.Provider value={{dark, toggleDark}}>
      {children}
    </Context.Provider>
  )
}

