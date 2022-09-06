import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { changeAddTask } from '../../redux/slice/filterSearch';
import { changeTaskEdit } from '../../redux/slice/tasksSlice';
import { setTasks } from '../../utils/api'
import { AddTaskWrapper } from './styleAddTask';

function AddTask(): JSX.Element {
  const dispatch = useDispatch()
  const { addTask } = useSelector((state: any) => state.filterSearch)
  let { task, taskEdit } = useSelector((state: any) => state.tasks)

  const handleSortByDate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    task = task ? { ...task, description: taskEdit.description } : {}
    const checkTask: boolean = (
      (task.title && task.description)
      && (task.status && task.priority))

    if (addTask) {
      if (checkTask) {
        const { token } = JSON.parse(localStorage.getItem('user'))
        const { data } = await setTasks('message', task, token)
        console.log(data);
        dispatch(changeTaskEdit(''))
      } else {
        alert('Preencha todos os campos e salve a tarefa')
        return
      }
    }
    dispatch(changeAddTask(!addTask))
  }

  return (
    <AddTaskWrapper>
      <p>Adicione uma nova tarefa</p>
      <div className="shortButtons">
        {
          addTask ? (<button
            className="button_sort_date"
            onClick={handleSortByDate}
          >
            Enviar
          </button>) : (<button
            className="button_sort_date"
            onClick={handleSortByDate}
          >
            Adicionar
          </button>)
        }
      </div>
    </AddTaskWrapper>
    )
  }

  export default AddTask
