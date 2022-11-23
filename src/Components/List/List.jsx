import { useNavigate, NavLink } from "react-router-dom";
import "./List.scss";
import { BiX } from "react-icons/bi";
import { tasksAPI } from "../../service/TasksService";
import { listsAPI } from "../../service/ListsService";

function List({ list, closeBurger }) {
  const { data: tasks } = tasksAPI.useFetchAllTasksQuery("");
  const [deleteTask] = tasksAPI.useDeleteTaskMutation("");
  const [deleteList] = listsAPI.useDeleteListMutation("");
  const navigate = useNavigate();

  const handlerDeleteList = (e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate("lists/0");
    tasks.forEach(
      (task) => task.listId === list.id && setTimeout(deleteTask(task), 1000)
    );
    deleteList(list);
  };

  return (
    <NavLink to={`lists/${list.id}`} onClick={closeBurger} className="list">
      <span>{list.title}</span>
      {list.id !== "0" && <BiX onClick={handlerDeleteList} />}
    </NavLink>
  );
}

export default List;
