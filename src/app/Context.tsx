'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import useGetWeathe from '@/hooks/useGetWeather'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
const CTX = createContext<{
  currentWeather?: object
  setCurrentWeather: Function
  locationData?: { city?: string; type: string }
  setLocationData: Function
}>({
  setCurrentWeather: () => {},
  setLocationData: () => {},
})

export default function Context({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className: string
}>) {
  const router = useRouter()
  const path = useSelectedLayoutSegment()
  // const [loading, setLoading] = useState<boolean>(true)
  const [currentWeather, setCurrentWeather] = useState<object>({})
  const [locationData, setLocationData] = useState<{ type: string }>({
    type: 'none',
  })
  const getWeather = useGetWeathe()

  useEffect(() => {
    if (locationData.type === 'none') {
      return router.replace('/location_error')
    }
    const initSetData = async () => {
      const curretWeatherResult = await getWeather(locationData)
      setCurrentWeather(curretWeatherResult)
      // setLoading(false)
      if (path === 'location_error') router.replace('/')
    }
    initSetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData])

  return (
    <CTX.Provider
      value={{
        currentWeather,
        setCurrentWeather,
        locationData,
        setLocationData,
      }}
    >
      <body className={`${className} h-screen mx-auto max-w-[700px]`}>
        {/* {loading ? <>loading</> : children} */}
        {children}
      </body>
    </CTX.Provider>
  )
}

export function useCTX() {
  return useContext(CTX)
}
