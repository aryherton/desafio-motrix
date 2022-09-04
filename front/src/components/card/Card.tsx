import React from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import { convertDateTime } from '../../utils/changeDate'
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
  const arrStatus = ['Pendente', 'Em andamento', 'Completo']

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
                arrStatus.map((stat) => {
                  return (
                    <option
                      key={ nanoid() }
                      value={ stat }
                      selected={ stat === status }
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
        <button type="button" className="historyTask">
          Histórico de atualizações
        </button>
      </div>
    </CardWrapper>
  )
}

export default Card
