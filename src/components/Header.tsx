import { FC } from 'react'
import cancel from '../assets/cancel.svg'

type props = {
  cancelAction: () => void
}

const Header: FC<props> = ({ cancelAction }) => {
  return (
    <>
      Select PX Engagement
      <img onClick={cancelAction} src={cancel} alt='cancel' />
    </>
  )
}
export default Header
