import { createContext, ReactNode, useState } from 'react'

interface IThemeContext {
  visible: boolean,
  toggleVisible?: (param: any) => void,
  itemID: number,
  toggleItemID?: (param: any) => void,
}

const defaultState = {
  visible: false,
  itemID: 0,
}

export const Context = createContext<IThemeContext>(defaultState)

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState(defaultState.visible)
  const [itemID, setItemID] = useState(defaultState.itemID)

  const toggleVisible = (param : any)=>{
    setVisible(param)
  }
  const toggleItemID = (param : any)=>{
    setItemID(param)
  }


  const value = {
    visible,
    toggleVisible,
    itemID,
    toggleItemID,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

