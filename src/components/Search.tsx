import { FC } from 'react'
import group from '../assets/Group 245.svg'
import filter from '../assets/filter.svg'
const Search: FC<{}> = () => {
  return (
    <>
      <input type='text' />
      <img alt='sort' src={group} />
      <img alt='filter' src={filter} />
    </>
  )
}
export default Search
