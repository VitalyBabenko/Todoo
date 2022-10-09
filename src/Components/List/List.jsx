import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useLocation,useNavigate } from 'react-router-dom'

import './List.scss'
import { BiX } from "react-icons/bi"
import { deleteList,deleteTask } from '../../asyncAction'


function List({ list }) {
   const dispatch = useDispatch()
   const location = useLocation()
   const navigate = useNavigate()
   const currentPage = +location.pathname.split('/').slice(-1)
   const tasks = useSelector(state => state.tasks)

   const removeList = (list) => {
      tasks.forEach(task => {
         console.log(+task.listId === +list.id)
         if (+task.listId === +list.id) dispatch(deleteTask(task)) 
      })
      navigate('lists/1')
      dispatch(deleteList(list))
   }

   return (
      <Link to={`lists/${list.id}`} style={{ textDecoration: 'none' }} >
         <li
            className={currentPage === +list.id ? 'chosen' : ''} >
            <span>{list.title}</span>
            {list.id !== '1' &&
               <BiX
                  onClick={e => {
                     e.preventDefault()
                     e.stopPropagation()
                     removeList(list)
                  }}
                  className='delete-item'
               />}
         </li>
      </ Link>
   )
}

export default List