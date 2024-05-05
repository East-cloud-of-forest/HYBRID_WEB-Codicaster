export default function useGetWeather() {
  const getData = async (data) => {
    let apiURL
    if (data.type === 'select')
      apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${data.code}&appid=${process.env.NEXT_PUBLIC_appid}&units=metric&lang=kr`
    // const geo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b905f0c03119f5162e6063c34f4e9e05&units=metric&lang=kr`
    return await (await fetch(apiURL)).json()
  }
  return getData
}
