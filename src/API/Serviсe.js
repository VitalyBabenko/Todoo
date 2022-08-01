import axios from "axios";

const axiosСlassic = axios.create({
   baseURL: 'https://62c6bbd02b03e73a58d57240.mockapi.io/'
})


class ListServiсe {

   static async getLists() {
      try {
         const response = await axiosСlassic.get('lists/')
         return response.data
      } catch {
         console.log('Can`t get list')
      }
   }

   static async postList(obj) {
      try {
         await axiosСlassic.post('lists/', obj)
      } catch {
         console.log('Can`t post obj')
      }
   }

   static async deleteList(delitedList) {
      try {
         await axiosСlassic.delete('lists/' + delitedList.id);
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
         await axiosСlassic.post(`lists/${obj.listId}/tasks/`, obj)
      } catch {
         console.log(`Can't post obj`)
      }

   }

   static async deleteTask(task) {
      try {
         await axiosСlassic.delete(`lists/${task.listId}/tasks/${task.id}`)
      } catch {
         console.log(`Can't delete task: ${task}`)
      }
   }

   static async putTask(listId, taskId, isDone) {
      try {
         await axiosСlassic.put(`lists/${listId}/tasks/${taskId}`, { done: isDone },)
      } catch (err) {
         console.log(err)
      }

   }
}

export { ListServiсe, TaskServiсe };

