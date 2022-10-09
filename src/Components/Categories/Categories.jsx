import React, { useState } from 'react'
import './Categories.scss'
import List from '../List/List'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import { useSelector,useDispatch } from "react-redux";
import {createList} from '../../asyncAction'
import { useNavigate } from 'react-router-dom'
import Burger from '../../ui/Burger/Burger'



function Categories() {
  const [newList, setNewList] = useState('')
  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists);
  const isBurgerChecked = useSelector(state => state.isBurgerChecked);
  const navigate = useNavigate()

  // console.log(isBurgerChecked)
  

  const getNewListId = () => {
    let result = 0;
    lists.forEach(list => {
       if (+list.id > result) result = +list.id;
    })
    return result + 1
 }

  const addList = (title) => {
    dispatch(createList({ id: getNewListId(), title: title, tasks: [] }))
    setNewList('')
  }

  return (
    <div className='categories' >
      
      <img
        onClick={() => navigate('lists/1')} 
        src='/img/logo.svg' alt='logo' />

      <Burger/>

      <ul className={isBurgerChecked ? 'active' : ''} >
        {lists.map(list =>
          <List
            key={list.id}
            list={list}
          />
        )}
      </ul>

      <Input
        value={newList}
        onChange={e => setNewList(e.target.value)}
        type="text"
        placeholder='New category' />
      
      <Button
        onClick={() => addList(newList)}
        title={'Add'}
      />
    </div>
  )
}

export default Categories