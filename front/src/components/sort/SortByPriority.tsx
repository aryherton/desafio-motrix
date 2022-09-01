import React from 'react'
import { useDispatch } from 'react-redux'

import { changeSearchStatus } from '../../redux/slice/filterSearch';

function App(): JSX.Element {
  const dispatch = useDispatch()
  const handleSortByPriority = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    dispatch(changeSearchStatus(target.value))
  }

  return (
    <form>
      <input
        name="priority"
        type="radio"
        id="priority_high"
        value="high"
        onClick={ handleSortByPriority }
      />
      <input
        name="priority"
        type="radio"
        id="priority_medium"
        value="medium"
        onClick={handleSortByPriority}
      />
      <input
        name="priority"
        type="radio"
        id="priority_low"
        value="low"
        onClick={handleSortByPriority}
      />
    </form>
  )
}

export default App
