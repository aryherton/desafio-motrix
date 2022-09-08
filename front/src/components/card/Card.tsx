import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

import Editor from '../formTasks/EditorTxt'
import {
  changeHistory,
  changeTaskEdit,
  changeTask,
  changeDetailsTask } from '../../redux/slice/tasksSlice'
import { convertDateTime } from '../../utils/changeDate'
import { arrStatus } from '../../utils/arrStatus'
import { arrPriority } from '../../utils/arrPriority'
import { ITasks } from '../../interface/ITasks'
import { CardWrapper } from './styleTasksCard'
import { CardEditWrapper } from './styleCardEdit'
import { putUpdateTask } from '../../utils/api'
import CorrectImg from '../../assets/images/correct.png'
import InProgress from '../../assets/images/work-in-progress.png'
import IMGPendent from '../../assets/images/pendente.png'
import DeleteImg from '../../assets/images/delete.png'
import Router from 'next/router'

function Card({
  key,
  id,
  title,
  description,
  priority,
  status,
  updatedAt,
}): JSX.Element {
  const router = useRouter()
  const dispatch = useDispatch()
  const { allTasks, taskEdit } = useSelector((state: any) => state.tasks)
  const [titleEdit, setTitleEdit] = useState(taskEdit.title)
  const [statusEdit, setStatusEdit] = useState(taskEdit.status)
  const [priorityEdit, setPriorityEdit] = useState(taskEdit.priority)

  const parser = new DOMParser()
  const html = parser.parseFromString(description, 'text/html')
  const text = html.body.textContent || ''

  const handleLocalState = async (target: any) => {
    if (arrPriority.includes(target.value)) {
      dispatch(changeTaskEdit({ ...taskEdit, priority: target.value }))
      setPriorityEdit(target.value)
    } else if (arrStatus.includes(target.value)) {
      dispatch(changeTaskEdit({ ...taskEdit, status: target.value }))
      setStatusEdit(target.value)
    } else {
      setTitleEdit(target.value)
    }

    if (!taskEdit) {
      const updateTask = {
        title: title,
        description: description,
        status: target.value,
        priority: priority,
        _id: id
      }
      console.log(updateTask);

      const { token } = JSON.parse(localStorage.getItem('user'))
      const upMessage = await putUpdateTask('message', updateTask, token)
      console.log(upMessage);
      Router.reload()
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

  const handleImgStatus = () => {
    switch (status) {
      case 'Concluído':
        return <Image src={CorrectImg} alt="checked" width={25} height={25} />
      case 'Em andamento':
        return <Image src={InProgress} alt="checked" width={55} height={55} />
      default:
        return <Image src={IMGPendent} alt="checked" width={35} height={35} />
    }
  }

  const hendleTaskDetails = () => {
    dispatch(changeDetailsTask({
      id,
      title,
      description,
      priority,
      status,
      updatedAt
    }))
    dispatch(changeTaskEdit(''))
    router.push(`/detailsTask`)
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
                  >
                    <optgroup>
                      {
                        arrStatus.map((stat: string) => {
                          return (
                            <option
                              value={ stat }
                              selected={ stat === taskEdit.status }
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
                  >
                    <optgroup>
                      {
                        arrPriority.map((prt: string) => {
                          return (
                            <option
                              value={ prt }
                              selected={ prt === taskEdit.priority }
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
                { status && handleImgStatus() }
              </div>
              <div className="titleAndTxt">
                <div className="titleTask">
                  <p>{title}</p>
                </div>
                <button
                  type="button"
                  className="btn_txt_details"
                  onClick={ hendleTaskDetails }
                >
                    <div className="txtTask">
                      <p>{text}</p>
                    </div>
                  </button>
              </div>
              <div className="menuTask">
                <button
                  type="button"
                  id={`${key}_button_edit`}
                  onClick={() => hendleEdit(
                    {
                      title,
                      description,
                      status,
                      priority,
                      _id: id
                    }
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
                            value={stat}
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
