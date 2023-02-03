import { createContext, ReactNode, useState } from 'react'

interface stateVisibleContextInterface {
  visible: boolean,
  toggleVisible?: (param: boolean) => void,
  itemID: number,
  toggleItemID?: (param: number) => void,
}

const defaultState = {
  visible: false,
  itemID: 0,
}

export const stateVisibleContext = createContext<stateVisibleContextInterface>(defaultState)

type Props = {
  children: ReactNode;
};

export const stateVisibleContextProvider = ({ children }: Props) => {
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
    <stateVisibleContext.Provider value={value}>
      {children}
    </stateVisibleContext.Provider>
  )
}

