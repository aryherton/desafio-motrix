import React from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import Search from '../search/Search'
import AddTaks from '../sort/AddTask'
import SortByPriority from '../sort/SortByPriority'
import { MenuWrapper } from './styleMenu'
import { changeHistory } from '../../redux/slice/tasksSlice'
import Voltar from '../../assets/images/voltar.png'

function Menu(): JSX.Element {
  const dispatch = useDispatch()
  const { historyTasks } = useSelector((state: any) => state.tasks)
  return (
    <MenuWrapper id="sectionMenu">
      {
        historyTasks ? (
          <Image
            id="imgVoltar"
            src={Voltar}
            alt="voltar"
            width={55}
            height={55}
            onClick={() => dispatch(changeHistory(''))}
          />) : (
          <Search />
        )
      }
      <div className="sortTodoList">
        <div className="sort">
          <AddTaks />
          <SortByPriority />
        </div>
      </div>
    </MenuWrapper>
  )
}

export default Menu
