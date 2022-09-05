import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'

import Editor from './EditorTxt'
import { changeTask } from '../../redux/slice/tasksSlice'
import { arrStatus } from '../../utils/arrStatus'
import { arrPriority } from '../../utils/arrPriority'

function FormTasks(): JSX.Element {
  const dispatch = useDispatch()
  const { task } = useSelector((state: any) => state.tasks)

  const handleTitleTask = (title: string) => {
    dispatch(changeTask({ ...task, title: title }))
  }

  const handleStatusTask = (status: string) => {
    dispatch(changeTask({ ...task, status: status }))
  }

  const handlePriorityTask = (priority: string) => {
    dispatch(changeTask({ ...task, priority: priority }))
  }

  return (
    <div>
      <div id="title">
        <label htmlFor="inputTitle">
          Título
          <input
            type="text"
            id="inputTitle"
            onChange={(e) => handleTitleTask(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="status">
          Status
          <select id="status">
            {
              arrStatus.map((status) => (
                <option
                  key={nanoid()}
                  value={status}
                  onClick={() => handleStatusTask(status) }
                >
                  {status}
                </option>
              ))
            }
          </select>
        </label>
        <label htmlFor="priority">
          Prioridade
          <select id="priority">
            {
              arrPriority.map((priority) => (
                <option
                  key={ nanoid() }
                  value={priority}
                  onClick={() => handlePriorityTask(priority) }
                >
                  { priority }
                </option>
              ))
            }
          </select>
        </label>
      </div>
      <Editor />
    </div>
  )
}

export default FormTasks
