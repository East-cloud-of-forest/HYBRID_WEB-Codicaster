export default function getIcon(data) {
  switch (data) {
    case '01d':
      return { img: 'sun.svg', width: '45%' }
    case '01n':
      return { img: 'moon.svg', width: '45%' }
    case '02d':
      return { img: 'fewc.svg', width: '70%' }
    case '02n':
      return { img: 'fewcn.svg', width: '52%' }
    case '03d':
      return { img: 'middlec.svg', width: '60%' }
    case '03n':
      return { img: 'middlecn.svg', width: '62%' }
    case '04d':
    case '04n':
      return { img: 'maxc.svg', width: '53%' }
    case '09d':
    case '10d':
      return { img: 'rain.svg', width: '55%' }
    case '09n':
    case '10n':
      return { img: 'rainn.svg', width: '55%' }
    case '11d':
      return { img: 'light.svg', width: '55%' }
    case '11n':
      return { img: 'lightn.svg', width: '55%' }
    case '13d':
    case '13n':
      return { img: 'snow.svg', width: '45%' }
    case '50d':
    case '50n':
      return { img: 'mist.svg', width: '45%' }
  }
}
