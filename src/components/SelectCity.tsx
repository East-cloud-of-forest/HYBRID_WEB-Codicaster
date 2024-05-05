import { useCTX } from '@/app/Context'
import { JSXElementConstructor, ReactElement, cloneElement } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import selectCityData from '@/data/selectCityData.json'

export default function SelectCity({
  children,
}: {
  children: ReactElement<any, string | JSXElementConstructor<any>>
}) {
  const { setLocationData } = useCTX()
  const cityData = JSON.parse(JSON.stringify(selectCityData))
  const locationSelect = async () => {
    const result = await withReactContent(Swal).fire({
      heightAuto: false,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: '닫기',
      html: (
        <div
          className="flex flex-col gap-2 max-h-[80vh] overflow-auto scrollbar-hide"
          id="location_form"
        >
          {Object.keys(cityData).map((key, index) => (
            <button
              key={index}
              className="w-full border py-4"
              onClick={() => {
                const form = document.getElementById('location_form')
                form?.setAttribute('value', `${key},${cityData[key]}`)
                // form.value = `${key},${selectCityData[key]}`
                Swal.clickConfirm()
              }}
            >
              {cityData[key]}
            </button>
          ))}
        </div>
      ),
      preConfirm: () => {
        const form = document.getElementById('location_form')
        const value = form?.getAttribute('value')?.split(',')
        return { code: value?.[0], city: value?.[1] }
      },
    })
    if (!result.isConfirmed) return
    setLocationData({
      type: 'select',
      ...result.value,
    })
  }
  return cloneElement(children, { onClick: locationSelect })
}
