import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Tasks.scss";
import Button from "../Button/Button";
import Task from "../Task/Task";
import Input from "../Input/Input";
import { listsAPI } from "../../service/ListsService";
import { tasksAPI } from "../../service/TasksService";

function Tasks() {
  const [newTask, setNewTask] = useState({ value: "" });
  const location = useLocation();
  const currentPage = location.pathname.split("/").slice(-1).join();
  const { data: lists } = listsAPI.useFetchAllListsQuery("");
  const { data: tasks, isLoading: isTasksLoading } =
    tasksAPI.useFetchAllTasksQuery("");
  const [createTask] = tasksAPI.useCreateTaskMutation();
  const pageTitle = lists.find((list) => list.id === currentPage).title;

  const taskFilter = (tasks) =>
    currentPage === "0"
      ? tasks
      : tasks.filter((task) => task.listId === currentPage);
  const filtredTasks = taskFilter(tasks);

  const handleCreate = async () => {
    await createTask(newTask);
    setNewTask({ value: "" });
  };

  return (
    <div className="tasks">
      <h1>{pageTitle}</h1>

      <Input
        value={newTask.value}
        onChange={(e) =>
          setNewTask({
            value: e.target.value,
            listId: currentPage,
            done: false,
          })
        }
        placeholder={`Create task on '${pageTitle}' category`}
        type="text"
      />

      {newTask.value && (
        <Button onClick={handleCreate} title={"Create new task"} />
      )}

      <hr />

      <ul>
        {isTasksLoading === false
          ? filtredTasks.map((task) => <Task key={task.id} task={task} />)
          : ""}
      </ul>
    </div>
  );
}

export default Tasks;
