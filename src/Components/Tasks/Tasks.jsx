import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from 'react-router-dom'

import './Tasks.scss'
import Button from '../../ui/Button/Button'
import Task from '../Task/Task'
import Input from '../../ui/Input/Input'
import {createTask} from '../../asyncAction'

function Tasks() {
   const [newTask, setNewTask] = useState({ value: '' })
   const lists = useSelector(state => state.lists)
   const tasks = useSelector(state => state.tasks)
   const dispatch = useDispatch()
   const location = useLocation()
   const currentPage = +location.pathname.split('/').slice(-1)

   const getNewTaskId = () => {
      let result = 0;
      tasks.forEach(task => {
         if (+task.id > result) result = +task.id;
      })
      return result + 1
   }

   const addTask = (newTask) => {
      dispatch(createTask(newTask))
      setNewTask({ value: '' })
   }

   const getPageTitle = () => {
      let result = '';
      lists.forEach(list => +list.id === currentPage ? result = list.title : null)
      return result
   }

   const taskFilter = (tasks) => {
      if (+currentPage === 1) {
         return tasks
      } else {
        return tasks.filter(task => +task.listId === +currentPage)
      } 
   }

   const filtredTasks = taskFilter(tasks);

   return (
      <div className='tasks' >
         <h1>{getPageTitle()}</h1>

         <Input
            value={newTask.value}
            onChange={e => setNewTask({ value: e.target.value, listId: currentPage, id: getNewTaskId(), done:false })}
            placeholder={`Create task on '${getPageTitle()}' category`}
            type="text" />
         
         {newTask.value &&
            <Button
               onClick={() => addTask(newTask)}
               title={'Create new task'}
            />}
         
         <hr />
         <ul >
            {filtredTasks.map(task => 
               <Task
                  key={task.id}
                  task={task}
               />)}
         </ul>
      </div>
   )
}

export default Tasks