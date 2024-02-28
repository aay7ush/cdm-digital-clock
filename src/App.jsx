import { useEffect, useState } from 'react'
import DigitalClock from './components/DigitalClock'
import Quote from './components/Quote'

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 5 && currentHour < 12) {
      setBackgroundImage('/morning.webp')
    } else if (currentHour >= 12 && currentHour < 17) {
      setBackgroundImage('/afternoon.webp')
    } else if (currentHour >= 17 && currentHour < 21) {
      setBackgroundImage('/evening.webp')
    } else {
      setBackgroundImage('/night.webp')
    }
  }, [])

  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-mask" />
      <article className="p-10 lg:p-20 text-white min-h-screen grid content-between text-2xl relative z-20">
        <Quote />
        <DigitalClock />
      </article>
    </main>
  )
}

export default App
