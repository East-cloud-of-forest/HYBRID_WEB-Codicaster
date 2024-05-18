export default function useGetWeather() {
  const getData = async (data) => {
    if (data.type !== 'select') return {}
    const APIKEY = process.env.NEXT_PUBLIC_appid
    const weatherData = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${data.code}&appid=${APIKEY}&units=metric&lang=kr`,
      )
    ).json()
    const { lon, lat } = weatherData.coord
    const onecallData = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${APIKEY}`,
      )
    ).json()
    console.log(onecallData)

    // let bbb = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_appid}&units=metric&lang=kr`
    // const geo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b905f0c03119f5162e6063c34f4e9e05&units=metric&lang=kr`
    return {
      onecallData,
      weatherData,
      main: {
        temp: weatherData.main.temp,
        feels_like: weatherData.main.feels_like,
        icon: weatherData.weather[0].icon,
        daliy: onecallData.daily[0].temp,
      },
    }
  }
  return getData
}
