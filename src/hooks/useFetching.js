import { useState } from "react"

export const useFetching = (callback) => {
   const [isLoading, setIsLoading] = useState('')
   const [error, setError] = useState('')

   const fetching = async () => {
      try {
         setIsLoading(true)
         await callback()
      } catch (e) {
         setError(e.message)
         console.log(error)
      } finally {
         setIsLoading(false)
      }
   }
   return [fetching, isLoading, error]
}