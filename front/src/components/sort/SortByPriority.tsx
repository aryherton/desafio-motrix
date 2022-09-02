import React from 'react'
import { useDispatch } from 'react-redux'

import { changeSearchStatus } from '../../redux/slice/filterSearch';
import { SortPriorityWrapper } from './styleSortPriority';

function App(): JSX.Element {
  const dispatch = useDispatch()
  const handleSortByPriority = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    dispatch(changeSearchStatus(target.value))
  }

  return (
    <SortPriorityWrapper>
      <label htmlFor="priority_high">
        <input
          name="priority"
          type="radio"
          id="priority_high"
          value="high"
          onClick={ handleSortByPriority }
        />
        Alta
      </label>
      <label htmlFor="priority_medium">
        <input
          name="priority"
          type="radio"
          id="priority_medium"
          value="medium"
          onClick={handleSortByPriority}
        />
        Média
      </label>
      <label htmlFor="priority_low">
        <input
          name="priority"
          type="radio"
          id="priority_low"
          value="low"
          onClick={handleSortByPriority}
        />
        Baixa
      </label>
    </SortPriorityWrapper>
  )
}

export default App
