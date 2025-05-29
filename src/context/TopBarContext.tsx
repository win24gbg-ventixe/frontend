import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'


interface TopBarContextType {
  title: string
  setTitle: (title: string) => void
}

const TopBarContext = createContext<TopBarContextType>({
  title: '',
  setTitle: () => {}
})

export const useTopBar = () => useContext(TopBarContext)

export const TopBarProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState('')

  return (
    <TopBarContext.Provider value={{ title, setTitle }}>
      {children}
    </TopBarContext.Provider>
  )
}