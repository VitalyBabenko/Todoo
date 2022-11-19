import { tasksAPI } from '../../service/TasksService'
import './Checkbox.scss'

function Checkbox({ task }) {
   const [ updateTask ] = tasksAPI.useUpdateTaskMutation('')
   
   const handleUpdateDone = () => {
      updateTask({...task, done: !task.done})
   }

   return (
      <div className='checkbox' >
         <input id={task.id} checked={task.done} onChange={handleUpdateDone} type="checkbox" />
         <label htmlFor={task.id} >
            <img src="/img/check.svg" alt="checkMark" />
         </label>
      </div >
   )
}

export default Checkbox