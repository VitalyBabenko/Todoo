import React from 'react'
import './Task.scss'
import { BiTrashAlt } from "react-icons/bi"
import Checkbox from '../../ui/Checkbox/Checkbox'
import { deleteTask } from '../../asyncAction'
import {useDispatch, useSelector} from "react-redux"
import { useLocation } from 'react-router-dom'

function Task({ task }) {
   const dispatch = useDispatch();
   const location = useLocation();
   const currentPage = +location.pathname.split('/').slice(-1);
   const lists = useSelector(state => state.lists)
   
   const getListName = () => {
      let result = ''
      lists.forEach(list => +list.id === +task.listId ? result = list.title : '')
      return result
   }
  
   return (
      <li className="task">
         <Checkbox task={task} />
         <p>{task.value}</p>

         {currentPage === 1 &&
            <span>{getListName()}</span>}
         
         <BiTrashAlt onClick={() => dispatch(deleteTask(task))}/>
      </li>
   )
}

export default Task