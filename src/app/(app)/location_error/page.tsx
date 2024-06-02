'use client'

import Image from 'next/image'
import SelectCity from '@/components/SelectCity'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-evenly items-center p-5">
      <Image
        src="/img/error.png"
        alt=""
        width="500"
        height="500"
        style={{ width: 500, height: 'auto' }}
        className="object-contain"
        priority={true}
      />
      <p className="text-center text-white text-lg">
        위치 정보를 가져올 수 없어요.
        <br />
        위치 아이콘을 눌러 지역을 선택해주세요 !
      </p>
      <SelectCity>
        <button className="animate-bounce pt-5">
          <Image
            src="/svg/location.svg"
            alt=""
            width="0"
            height="0"
            style={{ width: 40, height: '53.48' }}
          />
        </button>
      </SelectCity>
    </main>
  )
}
