import React, { useState, useContext } from 'react'
import './Categories.scss'
import { TodoContext } from '../context'
import { ListServiсe, TaskServiсe } from '../../API/Serviсe'
import List from '../List/List'
import Button from '../../UI/Button/Button'
import { useFetching } from '../../hooks/useFetching'

function Categories() {
  const { lists, setLists, setChosenList, navigate } = useContext(TodoContext)
  const [newList, setNewList] = useState('')

  const [addList, addListLoading] = useFetching(async () => {
    if (newList.length) {
      await ListServiсe.postList({ title: newList, id: '', tasks: [] })
      const updatedList = await ListServiсe.getLists()
      setLists(updatedList)
    }
    setNewList('')
  })

  const deleteList = async (deletedList) => {
    setLists(lists.filter(list => list.id !== deletedList.id))
    await TaskServiсe.deleteTasksInList(deletedList)
    await ListServiсe.deleteList(deletedList)
    navigate('/lists/1')
    setChosenList(lists[0])
  }

  return (
    <div className='categories' >
      <img
        className='categories__logo'
        onClick={() => {
          setChosenList(lists[0]);
          navigate('/lists/1')
        }}
        src='/img/logo.svg' alt='logo' />
      <ul className='categories__list'>
        {lists.map(list =>
          <List
            key={list.id}
            list={list}
            deleteList={deleteList}
          />
        )}
      </ul>
      <input
        value={newList}
        onChange={e => setNewList(e.target.value)}
        className='categories__input input'
        type="text"
        placeholder='New category' />
      <Button
        onClick={addList}
        title={'Add'}
        className={addListLoading ? 'categories__button loader' : 'categories__button'}
      />
    </div>
  )
}

export default Categories