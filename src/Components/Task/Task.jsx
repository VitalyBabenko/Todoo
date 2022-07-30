import React, { useContext } from 'react'
import './Task.scss'
import { BiTrashAlt } from "react-icons/bi"
import Checkbox from '../../ui/Checkbox/Checkbox'
import { TodoContext } from '../../context'

function Task({ task, deleteTask, title, list }) {
   const { setChosenList, navigate } = useContext(TodoContext)

   const changeChosenList = () => {
      setChosenList(list)
      navigate(`/lists/${list.id}`)
   }

   return (
      <li className="task">
         <Checkbox task={task} />
         <p className='task__value' >{task.value}</p>
         {title ?
            <div onClick={changeChosenList} className="task__category">{title}</div> : ''}
         <BiTrashAlt
            className='task__delete-icon'
            onClick={() => deleteTask(task)}
         />
      </li>
   )
}

export default Task