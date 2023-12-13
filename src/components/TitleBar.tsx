import { FC } from 'react'
import Search from './Search'

const TitleBar: FC<{ count: number }> = ({ count }) => {
  return (
    <div>
      Active Engagements({count}) <Search />
    </div>
  )
}
export default TitleBar
