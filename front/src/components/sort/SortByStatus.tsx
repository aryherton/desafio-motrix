import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { changeIsChecked } from '../../redux/slice/filterSearch';

function SortByStatus(): JSX.Element {
  const dispatch = useDispatch();
  const { isChecked } = useSelector((state: any) => state.filterSearch)
  const handleSortByStatus = () => {
    dispatch(changeIsChecked(!isChecked))
  }

  return (
    <form>
      <input
        name="sort_status"
        type="checkbox"
        id="sortStatus"
        value="status"
        onClick={ handleSortByStatus }
      />
      <label htmlFor="sort_status">Agrupar por status</label>
    </form>
  )
}

export default SortByStatus
