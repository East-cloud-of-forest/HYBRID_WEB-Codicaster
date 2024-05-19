'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import useGetWeathe from '@/hooks/useGetWeather'
import { useRouter, useSelectedLayoutSegment } from 'next/navigation'
import getBg from '@/lib/getBg'
const CTX = createContext<{
  weatherData?: any
  setWeatherData: Function
  locationData?: { city?: string; type: string }
  setLocationData: Function
}>({
  setWeatherData: () => {},
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
  const [weatherData, setWeatherData] = useState<any>({})
  const [locationData, setLocationData] = useState<{ type: string }>({
    type: 'none',
  })
  const getWeather = useGetWeathe()
  const background = getBg(weatherData?.main?.icon)

  useEffect(() => {
    if (locationData.type === 'none') {
      return router.replace('/location_error')
    }
    const initSetData = async () => {
      const weatherResult = await getWeather(locationData)
      setWeatherData(weatherResult)
      console.log(weatherResult)
      // setLoading(false)
      if (path === 'location_error') router.replace('/')
    }
    initSetData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData])

  return (
    <CTX.Provider
      value={{
        weatherData,
        setWeatherData,
        locationData,
        setLocationData,
      }}
    >
      <body
        className={`${className} h-screen mx-auto max-w-[700px]`}
        style={background}
      >
        {/* {loading ? <>loading</> : children} */}
        {children}
      </body>
    </CTX.Provider>
  )
}

export function useCTX() {
  return useContext(CTX)
}
