import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import { changeHistory } from '../../redux/slice/tasksSlice'
import { convertDateTime } from '../../utils/changeDate'
import { ITasks } from '../../interface/ITasks'
import { CardWrapper } from './styleTasksCard'
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
  const { allTasks } = useSelector((state: any) => state.tasks)
  const arrStatus = ['Pendente', 'Em andamento', 'Completo']

  const hendleHistory = (id: string) => {
    const history = allTasks.filter((task: ITasks) => task._id === id)
    dispatch(changeHistory(history[0]))
  }

  return (
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
            <p>{description}</p>
          </div>
        </div>
        <div className="menuTask">
          <button type="button" id={`${key}_button_edit`}>
            Editar
          </button>
          <div className="delete">
            <input type="checkbox" id={`${key} checkDelet`} />
            <label htmlFor={`${key} checkDelet`} id="delete">
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
            id={`status_${status}`}>
            <optgroup>
              {
                arrStatus.map((stat: string) => {
                  return (
                    <option
                      key={ nanoid() }
                      value={ stat }
                      selected={stat === status}
                    >
                      { stat }
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
          onClick={ () => hendleHistory(id) }
        >
          Histórico de atualizações
        </button>
      </div>
    </CardWrapper>
  )
}

export default Card
