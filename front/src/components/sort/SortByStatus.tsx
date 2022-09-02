import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { changeIsChecked } from '../../redux/slice/filterSearch';
import { SortStatusWrapper } from './styleSortStatus';

function SortByStatus(): JSX.Element {
  const dispatch = useDispatch();
  const { isChecked } = useSelector((state: any) => state.filterSearch)
  const handleSortByStatus = () => {
    dispatch(changeIsChecked(!isChecked))
  }

  return (
    <SortStatusWrapper>
      <input
        name="sort_status"
        type="checkbox"
        id="sort_status"
        value="status"
        onClick={ handleSortByStatus }
      />
      <label htmlFor="sort_status">Agrupar por status</label>
    </SortStatusWrapper>
  )
}

export default SortByStatus
