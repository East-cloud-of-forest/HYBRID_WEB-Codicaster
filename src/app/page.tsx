'use client'

import Image from 'next/image'
import { useCTX } from './Context'
import SelectCity from '@/components/SelectCity'
import getIcon from '@/lib/getIcon'
import CloseSlick from './CloseSlick'

export default function Home() {
  const { locationData, weatherData } = useCTX()
  const weatherIcon = getIcon(weatherData?.main?.icon)

  return (
    <main className="flex flex-col justify-between min-h-screen text-white p-[2vh] gap-2">
      <div>
        <SelectCity>
          <button className="flex gap-1 items-center border rounded-full px-5 py-1 bg-white bg-opacity-20">
            <Image
              alt=""
              src="/svg/location.svg"
              width="0"
              height="0"
              style={{ width: 18, height: 18 }}
            />
            <p className="text-[calc(0.5rem+1vh)]">{[locationData?.city]}</p>
          </button>
        </SelectCity>
      </div>

      <div className="flex gap-1 justify-around items-center bg-white bg-opacity-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)] py-[3vh]">
        <div className="flex flex-col gap-2 items-center justify-center text-center flex-1">
          <p className="text-[calc(3.5rem+10vw)] font-outline font-thin leading-none">
            {Math.round(weatherData.main.temp)}°
          </p>
          <p className="text-sm">
            체감온도{' '}
            <span className="font-outline">
              {Math.round(weatherData.main.feels_like)}°
            </span>
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={`/svg/${weatherIcon?.img}`}
            alt=""
            style={{
              width: weatherIcon?.width,
            }}
          />
        </div>
      </div>

      <div className="flex gap-1 justify-around items-center bg-white bg-opacity-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)] flex-1 h-0 w-full flex-col p-3">
        <CloseSlick />
        <div
          className="py-1 px-3 rounded-full w-full overflow-hidden"
          style={{ background: weatherData.tempByCloth.boxColor }}
        >
          <p className="animate-cloth-text truncate text-[calc(0.4rem+1vh)]">
            {weatherData.tempByCloth.clothText}
          </p>
        </div>
      </div>

      <div className="flex gap-1 justify-around items-center bg-white bg-opacity-20 rounded-2xl py-[2vh] shadow-[0_0_10px_rgba(0,0,0,0.3)]">
        {[
          { text: '아침', data: 'morn' },
          { text: '오전', data: 'day' },
          { text: '오후', data: 'eve' },
          { text: '밤', data: 'night' },
        ].map((data, index) => (
          <div key={index} className="flex flex-col gap-4 items-center">
            <p className="text-[calc(0.4rem+1vh)]">{data.text}</p>
            <p className="font-outline font-extralight leading-[100%] flex items-start text-[calc(0.8rem+2vh)]">
              {Math.round(weatherData.main.daliy[data.data])}
              <span className="text-3xl">°</span>
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
