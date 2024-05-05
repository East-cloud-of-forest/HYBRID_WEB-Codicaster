'use client'

import selectCityData from '@/data/selectCityData.json'
import { useCTX } from './Context'

export default function Home() {
  const { locationData, currentWeather } = useCTX()
  console.log(currentWeather)
  return (
    <main className="bg-white flex flex-col justify-center items-center min-h-screen">
      <p>{[locationData?.city]}</p>
      <p>CODICASTER</p>
    </main>
  )
}
