import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBurgerAction } from '../../store'
import './Burger.scss'

const Burger = () => {
  const dispatch = useDispatch()
  const isBurgerChecked = useSelector(state => state.isBurgerChecked)

  return (
     <label className='burger'>
      <input id='burger' type="checkbox" value={isBurgerChecked} onChange={() => dispatch(toggleBurgerAction(!isBurgerChecked))} />
      <div className="line-top"></div>
      <div className="line-middle"></div>
      <div className="line-bottom"></div>
    </label>
  )
}

export default Burger