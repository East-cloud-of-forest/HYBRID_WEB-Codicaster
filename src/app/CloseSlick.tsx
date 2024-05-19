import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useCTX } from './Context'

export default function CloseSlick() {
  const {
    weatherData: {
      tempByCloth: { clothTag },
    },
  } = useCTX()

  return (
    <Slider
      infinite={true}
      arrows={false}
      dots={true}
      autoplay={true}
      autoplaySpeed={5000}
      speed={2000}
      dotsClass="!flex justify-center items-center gap-2 flex-wrap"
      className="h-1 w-full [&_div]:h-full min-h-0 flex-auto !flex flex-col-reverse [&_.slick-active>.page]:bg-opacity-40"
      customPaging={(i) => {
        return (
          <div className="break-keep py-2 px-4 bg-white bg-opacity-20 rounded-full page">
            # {Object.keys(clothTag)[i]}
          </div>
        )
      }}
    >
      {Object.keys(clothTag).map((tag) => (
        <div
          key={tag}
          className="h-full w-full !flex justify-center items-center p-5"
        >
          <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(clothTag[tag])}`}
            alt=""
            className="object-contain h-full w-auto"
          />
        </div>
      ))}
    </Slider>
  )
}
