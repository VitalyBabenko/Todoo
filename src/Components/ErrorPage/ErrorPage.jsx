import React from 'react'
import './ErrorPage.scss'

function ErrorPage() {
   return (
      <div className='error' >
         <p className='error__number' >404</p>
         <p className='error__title' >Server Error</p>
         <p className='error__discriptoin'>
            An error occured in the application and your page
            could not be served. if you are the application owner,
            check your logs for details.
         </p>
      </div>
   )
}

export default ErrorPage