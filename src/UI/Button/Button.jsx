import React from 'react'
import './Button.scss'

function Button({ className, title, onClick }) {
   return (
      <button
         className={`button ${className}`}
         onClick={onClick}
      >
         {title}
      </button>
   )
}

export default Button