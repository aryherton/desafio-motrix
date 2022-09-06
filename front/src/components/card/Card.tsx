import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import Editor from '../formTasks/EditorTxt'
import { changeHistory, changeTaskEdit, changeTask } from '../../redux/slice/tasksSlice'
import { convertDateTime } from '../../utils/changeDate'
import { arrStatus } from '../../utils/arrStatus'
import { arrPriority } from '../../utils/arrPriority'
import { ITasks } from '../../interface/ITasks'
import { CardWrapper } from './styleTasksCard'
import { CardEditWrapper } from './styleCardEdit'
import { putUpdateTask } from '../../utils/api'
import CorrectImg from '../../assets/images/correct.png'
import DeleteImg from '../../assets/images/delete.png'

function Card({
  key,
  id,
  title,
  description,
  priority,
  status,
  updatedAt,
}): JSX.Element {
  const dispatch = useDispatch()
  const { allTasks, taskEdit } = useSelector((state: any) => state.tasks)
  const [titleEdit, setTitleEdit] = useState(taskEdit.title)
  const [statusEdit, setStatusEdit] = useState(taskEdit.status)
  const [priorityEdit, setPriorityEdit] = useState(taskEdit.priority)

  const parser = new DOMParser()
  const html = parser.parseFromString(description, 'text/html')
  const text = html.body.textContent || ''

  const handleLocalState = (target: any) => {
    if (arrPriority.includes(target.value)) {
      setPriorityEdit(target.value)
    } else if (arrStatus.includes(target.value)) {
      setStatusEdit(target.value)
    } else {
      setTitleEdit(target.value)
    }
  }

  const setEditNewTask = async () => {
    const newTask = {
      ...taskEdit,
      title: titleEdit,
      status: statusEdit,
      priority: priorityEdit,
    }
    const { token } = JSON.parse(localStorage.getItem('user'))
    const upMessage = await putUpdateTask('message', newTask, token)
    console.log(upMessage);

    dispatch(changeTask(newTask))
    dispatch(changeTaskEdit(''))
  }

  const hendleHistory = (id: string) => {
    const history = allTasks.filter((task: ITasks) => task._id === id)
    dispatch(changeHistory(history[0]))
  }

  const hendleEdit = (objTaskEdit: any) => {
    dispatch(changeTaskEdit(objTaskEdit))
  }

  const handleDelete = ({ target }, id: string) => {
    if (target.checked) {
      const arrIdDelete = JSON.parse(localStorage.getItem('arrIdDelete'))

      if (arrIdDelete) {
        arrIdDelete.push(id)
        localStorage.setItem('arrIdDelete', JSON.stringify(arrIdDelete))
      } else {
        localStorage.setItem('arrIdDelete', JSON.stringify([id]))
      }
    } else {
      let arrIdDelete = JSON.parse(localStorage.getItem('arrIdDelete'))
      const index = arrIdDelete.filter((item: string) => item !== id)
      localStorage.setItem('arrIdDelete', JSON.stringify(index))
    }
  }

  return (
      <>
        {taskEdit._id === id ? (
        <CardEditWrapper>
          <div className="menu_edit">
            <div className="inputs_edit">
              <div className="title_edit">
                <label htmlFor="inputTitleEdit">
                  Título:
                  <input
                    id="inputTitleEdit"
                    type="text"
                    defaultValue={taskEdit.title}
                    onChange={({ target }) => handleLocalState(target) }
                  />
              </label>
              </div>
              <div className="datas_info">
                <span className="statusTask">
                  <p>Status: </p>
                  <select
                    className="selectStatus"
                    name="selectStatus"
                    id={`status_${status}`}
                  >
                    <optgroup>
                      {
                        arrStatus.map((stat: string) => {
                          return (
                            <option
                              value={ statusEdit ? statusEdit : stat }
                              selected={statusEdit ? false : stat === status}
                              onClick={({ target }) => handleLocalState(target)}
                            >
                              {stat}
                            </option>
                          )
                        })
                      }
                    </optgroup>
                  </select>
                </span>
                <span className="priorityTask">
                  <p className="txt_priority">Prioridade: </p>
                  <select
                    className="selectPriority"
                    name="selectPriority"
                    id={`priority_${priority}`}>
                    <optgroup>
                      {
                        arrPriority.map((prt: string) => {
                          return (
                            <option
                              value={ priorityEdit ? priorityEdit : prt }
                              selected={priorityEdit ? false : prt === priority}
                              onClick={({target}) => handleLocalState(target)}
                            >
                              {prt}
                            </option>
                          )
                        })
                      }
                    </optgroup>
                  </select>
                </span>
              </div>
            </div>
            <div className="menuTask">
              <button
                className="btn_editar"
                type="button"
                id={`${key}_button_edit`}
                onClick={ setEditNewTask }
              >
                Editar
              </button>
              <div className="delete">
                <input
                  type="checkbox"
                  id={`${key} ${id}`}
                  onClick={() => handleDelete(event, id)}
                />
                <label htmlFor={`${key} ${id}`} id="delete">
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
          <div className="txtTask">
            <Editor />
          </div>
        </CardEditWrapper>
        ) : (
          <CardWrapper key={id + key}>
            <div className="main_info">
              <div className="img_status">
                <Image src={CorrectImg} alt="checked" width={25} height={25} />
              </div>
              <div className="titleAndTxt">
                <div className="titleTask">
                  <p>{title}</p>
                </div>
                <div className="txtTask">
                  <p>{text}</p>
                </div>
              </div>
              <div className="menuTask">
                <button
                  type="button"
                  id={`${key}_button_edit`}
                  onClick={() => hendleEdit(
                    { title, description, status, priority, _id: id }
                  )}
                >
                  Editar
                </button>
                <div className="delete">
                  <input
                    type="checkbox"
                    id={`${key} ${id}`}
                    onClick={() => handleDelete(event, id)}
                  />
                  <label htmlFor={`${key} ${id}`} id="delete">
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
                <span className="txtStatus">Status: </span>
                <span className="valueStatus">{status}</span>
              </span>
              <span className="priorityTask">
                <p className="txt_priority">Prioridade: </p>
                <p className="name_priority">{`${priority}`}</p>
              </span>
              <span className="dateTask">
                <p>Atualizada:</p>
                <p>{convertDateTime(updatedAt)}</p>
              </span>
              <button
                type="button"
                className="historyTask"
                onClick={() => hendleHistory(id)}
              >
                Histórico de atualizações
              </button>
            </div>
          </CardWrapper>
        )}
      </>
  )
}

export default Card
