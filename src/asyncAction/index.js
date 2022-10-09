import axios from "axios";
import {
   getAllListsAction,
   getAllTasksAction,
   createListAction,
   createTaskAction,
   deleteTaskAction,
   deleteListAction,
   toggleDoneAction,
   loadingAction,
   errorAction
} from '../store'


const axiosСlassic = axios.create({
   baseURL: 'https://62c6bbd02b03e73a58d57240.mockapi.io/'
})

// init
export const getData = () => {
   return async dispatch => {
     try {
      const { data } = await axiosСlassic.get('lists')
      dispatch(getAllListsAction(data))
      const tasksList = [];
      data.forEach(({ tasks }) => {
            tasks.forEach(task => tasksList.push(task))
      })
        dispatch(getAllTasksAction(tasksList))
     } catch {
      dispatch(errorAction(true))
     } finally {
      dispatch(loadingAction(false))
     }
   }
}



// creating
export const createList = (createdList) => {
   return async dispatch => {
      dispatch(createListAction(createdList))
      await axiosСlassic.post('lists/', createdList)
      await dispatch(getData())
   }
}

export const createTask = (createdTask) => {
   return async dispatch => {
      dispatch(createTaskAction(createdTask))
      await axiosСlassic.post(`lists/${createdTask.listId}/tasks/`, createdTask) 
      await dispatch(getData())
   }
}


// delete
export const deleteTask = (deletedTask) => {
   return async dispatch => {
      dispatch(deleteTaskAction(deletedTask))
      await axiosСlassic.delete(`lists/${deletedTask.listId}/tasks/${deletedTask.id}`) 
   }
}

export const deleteList = (deletedList) => {
   return async dispatch => {
      dispatch(deleteListAction(deletedList))
      await axiosСlassic.delete(`lists/${deletedList.id}`)  
   }
}


// toggle done param
export const toggleDone = (task) => {
   return async dispatch => {
      dispatch(toggleDoneAction(task))
      await axiosСlassic.put(`lists/${task.listId}/tasks/${task.id}`, { done: !task.done },)
   }
}


