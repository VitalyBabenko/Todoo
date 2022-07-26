import axios from "axios";


class ListServiсe {

   static async getLists() {
      try {
         const response = await axios.get('https://62c6bbd02b03e73a58d57240.mockapi.io/lists')
         return response.data
      } catch {
         console.log('Can`t get list')
      }
   }

   static async postList(obj) {
      try {
         await axios.post(`https://62c6bbd02b03e73a58d57240.mockapi.io/lists`, obj)
      } catch {
         console.log('Can`t post obj')
      }
   }

   static async deleteList(delitedList) {
      try {
         await axios.delete(`https://62c6bbd02b03e73a58d57240.mockapi.io/lists/${delitedList.id}`);
      } catch {
         console.log('Can`t delete list')
      }
   }

}


class TaskServiсe {

   static async deleteTasksInList(list) {
      list.tasks.map(async (task) =>
         await this.deleteTask(task)
      )
   }

   static async postTask(obj) {
      try {
         await axios.post(`https://62c6bbd02b03e73a58d57240.mockapi.io/lists/${obj.listId}/tasks`, obj)
      } catch {
         console.log(`Can't post obj`)
      }

   }

   static async deleteTask(task) {
      try {
         await axios.delete(`https://62c6bbd02b03e73a58d57240.mockapi.io/lists/${task.listId}/tasks/${task.id}`)
      } catch {
         console.log(`Can't delete task: ${task}`)
      }
   }

   static async putTask(task) {
      try {
         await axios.put(`https://62c6bbd02b03e73a58d57240.mockapi.io/lists/${task.listId}/tasks/${task.id}`, task)
      } catch (err) {
         console.log(err)
      }

   }
}

export { ListServiсe, TaskServiсe };

