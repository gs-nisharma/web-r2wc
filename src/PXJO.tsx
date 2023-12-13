import { FC, useEffect, useState } from 'react'
import Header from './components/Header'
import TitleBar from './components/TitleBar'
type props = {
  cancelAction: () => void
}
const PXJO: FC<props> = ({ cancelAction }) => {
  const [time, setTime] = useState(Date())

  useEffect(() => {
    setInterval(() => {
      setTime(Date())
    }, 1000)
  }, [])

  return (
    <>
      <Header cancelAction={cancelAction} />
      <TitleBar count={107} />
    </>
  )
}
export default PXJO
