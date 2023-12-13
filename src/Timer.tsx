import { FC, useEffect, useState } from 'react'
type props = {
  message: string
}
const Timer: FC<props> = ({ message }) => {
  const [time, setTime] = useState(Date())

  useEffect(() => {
    setInterval(() => {
      setTime(Date())
    }, 1000)
  }, [])

  return (
    <p>
      {message} : {time}
    </p>
  )
}
export default Timer
