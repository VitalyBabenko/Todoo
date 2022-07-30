import React, { useState, useContext } from 'react'
import { TodoContext } from '../../context'
import './Tasks.scss'
import Button from '../../ui/Button/Button'
import Task from '../Task/Task'
import { TaskServiсe, ListServiсe } from '../../api/Serviсe'
import { useFetching } from '../../hooks/useFetching'
import Input from '../../ui/Input/Input'


function Tasks() {
   const { lists, setLists, chosenList, setChosenList, currentPage } = useContext(TodoContext)
   const [newTask, setNewTask] = useState({ value: '' })

   const [addTask, addTaskLoading] = useFetching(async () => {
      await TaskServiсe.postTask(newTask)
      const updatedList = await ListServiсe.getLists()
      await setLists(updatedList)
      updatedList.forEach(list => list.id === chosenList.id ? setChosenList(list) : '')
      setNewTask({ value: '', listId: null })
   })

   const deleteTask = async (deletedTask) => {
      const newList =
         lists.map(list => {
            if (list.id === deletedTask.listId) {
               list.tasks = list.tasks.filter(task => task.id !== deletedTask.id)
            }
            return list
         })
      setLists(newList)
      await TaskServiсe.deleteTask(deletedTask)
   }

   return (
      <div className='tasks' >
         <h1 className='tasks__title' >
            {chosenList.title}
         </h1>

         <Input
            value={newTask.value}
            onChange={e => setNewTask({ value: e.target.value, listId: currentPage })}
            className='tasks__input input'
            type="text"
            placeholder={`Create task on '${chosenList.title}' category`} />
         {newTask.value &&
            <Button
               onClick={() => addTask(newTask)}
               title={'Create new task'}
               className={addTaskLoading ? 'loader new-task-btn' : 'new-task-btn'}
            />}
         <hr className='tasks__line' />
         <ul className='tasks__items' >
            {currentPage !== 1 ?
               chosenList.tasks.map(task =>
                  <Task
                     key={task.id}
                     task={task}
                     deleteTask={() => deleteTask(task)}
                  />)
               :
               lists.map(list => list.tasks.map(task =>
                  <Task
                     key={task.id}
                     task={task}
                     title={list.title}
                     list={list}
                     deleteTask={() => deleteTask(task)}
                  />))
            }
         </ul>
         <Button
            className={'tasks__undo'}
            title={'Undo action'}
            onClick={() => console.log(window.history)}
         />


      </div>
   )
}

export default Tasks