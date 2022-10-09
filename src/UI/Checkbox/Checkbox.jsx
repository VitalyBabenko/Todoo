import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleDone } from '../../asyncAction'
import './Checkbox.scss'

function Checkbox({ task }) {
   const dispatch = useDispatch()

   return (
      <div className='checkbox' >
         <input id={task.id} checked={task.done} onChange={() => dispatch(toggleDone(task))} type="checkbox" />
         <label htmlFor={task.id} >
            <img src="/img/check.svg" alt="checkMark" />
         </label>
      </div >
   )
}

export default Checkbox