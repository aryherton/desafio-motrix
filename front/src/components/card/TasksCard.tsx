import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'

import Card from './Card'
import TasksHistoryCard from './TasksHistoryCard'
import { TasksWrapper } from './styleTasksCard'
import { ITasks } from '../../interface/ITasks'
import { changeFilterTasks } from '../../redux/slice/tasksSlice'

function TasksCard(): JSX.Element {
  const dispatch = useDispatch()
  const { allTasks, filterTasks, historyTasks } = useSelector((state: any) => state.tasks)
  const { searchPriority, searchText } = useSelector((state: any) => state.filterSearch)

  const handleArrTasks = () => {
    if (searchPriority) {
      switch (searchPriority) {
        case 'high':
          const highPriority = allTasks.filter((task: ITasks) => task.priority === 'Alta')
          dispatch(changeFilterTasks(highPriority))
          break
        case 'medium':
          const mediumPriority = allTasks.filter((task: ITasks) => task.priority === 'Media')
          dispatch(changeFilterTasks(mediumPriority))
          break
        case 'low':
          const lowPriority = allTasks.filter((task: ITasks) => task.priority === 'Baixa')
          dispatch(changeFilterTasks(lowPriority))
          break
        default:
          dispatch(changeFilterTasks(allTasks))
      }
    } else {
      dispatch(changeFilterTasks(allTasks))
    }
  }

  useEffect(() => {
      handleArrTasks()
    },
    [
      searchPriority,
      allTasks,
      searchText,
      historyTasks,
    ]
  )

  return (
    <TasksWrapper id="sectionCardsTasks">
      {
        historyTasks
          ? (<TasksHistoryCard task={ historyTasks } />)
          : (
            filterTasks?.map((task: ITasks) => {
              return (
                <Card
                  key={ nanoid() }
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  status={task.status}
                  updatedAt={task.updatedAt}
                />
              )
            })
          )
      }
    </TasksWrapper>
  )
}

export default TasksCard
