import { useEffect } from 'react'
import { useTopBar } from '../context/TopBarContext'

export const usePageTitle = (title: string) => {
  const { setTitle } = useTopBar()

  useEffect(() => {
    console.log('[usePageTitle] Setting title to:', title)
    setTitle(title)

  }, [title])
}