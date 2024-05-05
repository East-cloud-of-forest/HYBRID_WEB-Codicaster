'use client'

import Image from 'next/image'
import SelectCity from '@/components/SelectCity'

export default function Page() {
  return (
    <main className="bg-blue-600 min-h-screen flex flex-col justify-center items-center">
      <Image src="/img/error.png" alt="" width="500" height="500" />
      <p className="text-center py-14 text-white font-black text-lg">
        위치 정보를 가져올 수 없어요.
        <br />
        위치 아이콘을 눌러 지역을 선택해주세요 !
      </p>
      <SelectCity>
        <button className="animate-bounce">
          <Image src="/svg/location.svg" alt="" width="40" height="40" />
        </button>
      </SelectCity>
    </main>
  )
}
