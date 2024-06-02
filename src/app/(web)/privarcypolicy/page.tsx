export default function Page() {
  return (
    <main className="p-5 flex flex-col gap-4">
      <p className="text-2xl font-black">코디캐스터 개인정보 보호정책</p>
      <section className="flex flex-col gap-2">
        <p className="font-semibold">
          서비스 이용 과정에서 위치정보가 생성되어 수집될 수 있습니다.
        </p>
        <p>
          위치정보의 보호 및 이용 등에 관한 법률 제16조 제2항에 근거하여
          이용자의 위치정보를 사용자의 기기에 수집됩니다. 앱의 삭제 및 데이터 삭제를 이용해 정보를 파기할 수 있으며 코디캐스터의 서버에 따로 저장되지 않습니다.
        </p>
      </section>
      <section className="flex flex-col gap-2">
        <p className="font-semibold">
          위치기반 서비스를 제공하기 위해 개인위치정보를 처리하는 목적은 아래와 같습니다.
        </p>
        <p>
          사용자의 위치에 기반한 날씨 데이터 및 옷차림 데이터 제공.
        </p>
      </section>
    </main>
  )
}
