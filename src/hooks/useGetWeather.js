export default function useGetWeather() {
  const getData = async () => {
    const city = `https://api.openweathermap.org/data/2.5/weather?q=${'busan'}&appid=${
      process.env.NEXT_PUBLIC_appid
    }&units=metric&lang=kr`
    // const geo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b905f0c03119f5162e6063c34f4e9e05&units=metric&lang=kr`
    const data = await (await fetch(city)).json()
    return data
  }
  return getData
}
