import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context'
import { TaskServiсe } from '../../api/Serviсe'
import './Checkbox.scss'

function Checkbox({ task }) {
   const { lists, setLists } = useContext(TodoContext)
   const [isDone, setIsDone] = useState(task.done)



   const toggleDoneParram = (e) => {
      setIsDone(!isDone)
      TaskServiсe.putTask(task.listId, task.id, !isDone)
      const updatedList = lists.map(list => {
         if (list.id === task.listId) {
            list.tasks.map(item =>
               +item.id === +task.id ? task.done = !isDone : ''
            )
         }
         return list
      })
      setLists(updatedList)
   }

   return (
      <div className='check' >
         <input id={task.id} checked={isDone} onChange={e => toggleDoneParram(e)} className='check__input' type="checkbox" />
         <label htmlFor={task.id} className='check__box' >
            <img className='check__mark' src="/img/check.svg" alt="checkMark" />
         </label>
      </div >
   )
}

export default Checkbox