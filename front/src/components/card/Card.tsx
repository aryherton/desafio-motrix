import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import { changeHistory } from '../../redux/slice/tasksSlice'
import { convertDateTime } from '../../utils/changeDate'
import { arrStatus } from '../../utils/arrStatus'
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

  const parser = new DOMParser()
  const html = parser.parseFromString(description, 'text/html')
  const text = html.body.textContent || ''

  const hendleHistory = (id: string) => {
    const history = allTasks.filter((task: ITasks) => task._id === id)
    dispatch(changeHistory(history[0]))
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
          <button type="button" id={`${key}_button_edit`}>
            Editar
          </button>
          <div className="delete">
            <input
              type="checkbox"
              id={`${key} ${id}`}
              onClick={() => handleDelete(event, id) }
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
            id={`status_${status}`}>
            <optgroup>
              {
                arrStatus.map((stat: string) => {
                  return (
                    <option
                      key={ nanoid() }
                      // value={ stat }
                      selected={stat === status}
                      defaultValue={ stat }
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
