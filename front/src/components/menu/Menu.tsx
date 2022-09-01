import React from 'react'

import Search from '../search/Search'
import SortByStatus from '../sort/SortByStatus'
import SortByDate from '../sort/SortByDate'
import SortByPriority from '../sort/SortByPriority'
import { MenuWrapper } from './styleMenu'

function Menu(): JSX.Element {
  return (
    <MenuWrapper>
      <Search />
      <div className="sortTodoList">
        <div className="sort">
          <SortByDate />
          <SortByPriority />
        </div>
        <SortByStatus />
      </div>
    </MenuWrapper>
  )
}

export default Menu
