import { createContext, ReactNode, useState } from 'react'

interface stateVisibleContextInterface {
  visible: boolean
  toggleVisible?: (param: boolean) => void
  itemID: number
  toggleItemID?: (param: number) => void
}

const defaultState = {
  visible: false,
  itemID: 0,
}

export const StateVisibleContext = createContext<stateVisibleContextInterface>(defaultState)

type Props = {
  children: ReactNode
}

export const StateVisibleContextProvider = ({ children }: Props) => {
  const [visible, setVisible] = useState(defaultState.visible)
  const [itemID, setItemID] = useState(defaultState.itemID)

  const toggleVisible = (param: any) => {
    setVisible(param)
  }
  const toggleItemID = (param: any) => {
    setItemID(param)
  }

  const value = {
    visible,
    toggleVisible,
    itemID,
    toggleItemID,
  }

  return <StateVisibleContext.Provider value={value}>{children}</StateVisibleContext.Provider>
}
