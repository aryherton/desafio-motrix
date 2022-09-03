import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Image from 'next/image'

import { TasksWrapper, CardWrapper } from './styleTasksCard'
import { ITasks } from '../../interface/ITasks'
import { changeFilterTasks } from '../../redux/slice/tasksSlice'
import { convertDateTime } from '../../utils/changeDate'
import CorrectImg from '../../assets/images/correct.png'
import DeleteImg from '../../assets/images/delete.png'

function TasksCard(): JSX.Element {
  const dispatch = useDispatch()
  const { allTasks, filterTasks } = useSelector((state: any) => state.tasks)
  const { searchPriority } = useSelector((state: any) => state.filterSearch)

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
  }, [searchPriority])

  return (
    <TasksWrapper id="sectionCardsTasks">
      {filterTasks?.map((task: ITasks, index: number) => {
        const arrStatus = ['Pendente', 'Em andamento', 'Completo']
        return (
          <CardWrapper key={task._id + index}>
            <div className="main_info">
              <div className="img_status">
                <Image src={ CorrectImg } alt="checked" width={25} height={25} />
              </div>
              <div className="titleAndTxt">
                <div className="titleTask">
                  <p>{task.title}</p>
                </div>
                <div className="txtTask">
                  <p>{ task.description }</p>
                </div>
              </div>
              <div className="menuTask">
                <button type="button" id={ `${ index }_button_edit` }>
                  Editar
                </button>
                <div className="delete">
                  <input type="checkbox" id={`${index} checkDelet`} />
                  <label htmlFor={ `${ index } checkDelet` } id="delete">
                    <Image
                      src={DeleteImg}
                      alt="delete"
                      width={25}
                      height={25}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="datas_info">
              <span className="statusTask">
                <select
                  className="selectStatus"
                  name="selectStatus"
                  id={`status_${task.status}`}>
                  <optgroup>
                    {
                      arrStatus.map((status, index) => (
                        <option
                          value={status}
                          key={index}
                          selected={status === task.status}
                        >
                          {status}
                        </option>
                      ))
                    }
                  </optgroup>
                </select>
              </span>
              <span className="priorityTask">
                <p className="txt_priority">Prioridade: </p>
                <p className="name_priority">{ `${ task.priority }` }</p>
              </span>
              <span className="dateTask">
                <p>Atualizada:</p>
                <p>{convertDateTime(task.updatedAt)}</p>
              </span>
              <button type="button" className="historyTask">
                Histórico de atualizações
              </button>
            </div>
          </CardWrapper>
        )
      })}
    </TasksWrapper>
  )
}

export default TasksCard
