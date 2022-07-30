import React, { useContext } from 'react'
import { TodoContext } from '../../context'
import { BiX } from "react-icons/bi"
import './List.scss'
import { Link } from 'react-router-dom'

function List({ list, deleteList }) {
   const { setChosenList, currentPage } = useContext(TodoContext)

   return (
      <Link to={`lists/${list.id}`} style={{ textDecoration: 'none' }} >
         <li
            onClick={() => setChosenList(list)}
            className={currentPage === +list.id ? 'categories__item chosen' : 'categories__item'} >
            <span className='categories__title' >
               {list.title}
            </span>
            {list.id !== '1' &&
               <BiX
                  onClick={e => {
                     e.preventDefault()
                     e.stopPropagation()
                     deleteList(list)
                  }}
                  className='delete-item'
               />}
         </li>
      </ Link>
   )
}

export default List