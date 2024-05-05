'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import useGetWeathe from '@/hooks/useGetWeather'
const CTX = createContext({})

export default function Context({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className: string
}>) {
  const [loading, setLoading] = useState<boolean>(true)
  const [currentWeather, setCurrentWeather] = useState<object>({})
  const getWeather = useGetWeathe()

  useEffect(() => {
    const initSetData = async () => {
      const result = await getWeather()
      setCurrentWeather(result)
      setLoading(false)
    }
    initSetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <CTX.Provider value={{ currentWeather, setCurrentWeather }}>
      <body className={`${className} h-screen mx-auto max-w-[700px]`}>
        {loading ? <>loading</> : children}
      </body>
    </CTX.Provider>
  )
}

export function useCTX() {
  return useContext(CTX)
}
