import React, { useState } from 'react'
import { TaskServiсe } from '../../API/Serviсe'
import './Checkbox.scss'

function Checkbox({ task }) {

   const [isDone, setIsDone] = useState(task.done)



   const toggleDoneParram = (e) => {
      setIsDone(!isDone)
      task.done = e.target.checked
      TaskServiсe.putTask(task)
   }

   return (
      <div >
         <input id={task.id} checked={isDone} onChange={e => toggleDoneParram(e)} className='checkbox' type="checkbox" />
         <label htmlFor={task.id}>
            <img className='check-mark' src="/img/check.svg" alt="checkMark" />
         </label>
      </div>
   )
}

export default Checkbox