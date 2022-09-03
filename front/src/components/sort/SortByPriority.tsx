import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeSearchPriority } from '../../redux/slice/filterSearch';
import { SortPriorityWrapper } from './styleSortPriority';

function App(): JSX.Element {
  const dispatch = useDispatch()
  const [check, setCheck] = useState(true)
  const { searchPriority } = useSelector((state: any) => state.filterSearch)
  const handleSortByPriority = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    dispatch(changeSearchPriority(target.value))
  }

  useEffect(() => {
    if (searchPriority) {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }, [searchPriority])

  return (
    <SortPriorityWrapper>
      <label htmlFor="all">
        <input
          name="priority"
          type="radio"
          id="priority_all"
          value=""
          defaultChecked={check}
          onClick={handleSortByPriority}
        />
        Todas
      </label>
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
