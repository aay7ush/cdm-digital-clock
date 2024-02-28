import { Moon, Sun, Sunrise } from 'lucide-react'
import { useEffect, useState } from 'react'

const DigitalClock = () => {
  const [time, setTime] = useState(getTime())
  const [greeting, setGreeting] = useState('')
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTime())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning')
      setIcon(<Sunrise size={'1.7rem'} />)
    } else if (currentHour >= 12 && currentHour < 17) {
      setGreeting('Good Afternoon')
      setIcon(<Sun size={'1.7rem'} />)
    } else if (currentHour >= 17 && currentHour < 21) {
      setGreeting('Good Evening')
      setIcon(<Sun size={'1.7rem'} />)
    } else {
      setGreeting('Good Night')
      setIcon(<Moon size={'1.7rem'} />)
    }
  }, [time])

  function getTime() {
    const currentTime = new Date()
    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    return { hours, minutes }
  }

  function getDate() {
    const currentDate = new Date()
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const day = days[currentDate.getDay()]
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const month = months[currentDate.getMonth()]
    const date = currentDate.getDate()
    return { day, month, date }
  }

  return (
    <section className="flex flex-col lg:flex-row gap-5 justify-between font-medium">
      <div className="space-y-3">
        <div className="flex gap-3 items-center">
          {icon}
          <p>
            {greeting}, <span className="uppercase">It&apos;s Currently</span>
          </p>
        </div>
        <div className="flex gap-3">
          <h1 className="text-8xl font-bold">
            <span className="text-red-600">{time.hours}</span>:{time.minutes}
          </h1>
          <p className="self-end">India Standard Time</p>
        </div>
      </div>
      <p className="lg:self-end text-4xl">
        <span className="text-red-600">{getDate().day.charAt(0)}</span>
        {getDate().day.slice(1)}, {getDate().month} {getDate().date}
      </p>
    </section>
  )
}

export default DigitalClock
