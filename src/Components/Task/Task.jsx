import "./Task.scss";
import { BiTrashAlt, BiPencil } from "react-icons/bi";
import Checkbox from "../Checkbox/Checkbox";
import { useLocation, useNavigate } from "react-router-dom";
import { tasksAPI } from "../../service/TasksService";
import { listsAPI } from "../../service/ListsService";

function Task({ task }) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.split("/").slice(-1).join();
  const { data: lists } = listsAPI.useFetchAllListsQuery("");
  const [updateTask] = tasksAPI.useUpdateTaskMutation("");
  const [deleteTask] = tasksAPI.useDeleteTaskMutation("");
  const parentList = lists.find((list) => list.id === task.listId);
  const handleDelete = async () => await deleteTask(task);
  const handleUpdateValue = () => {
    const newValue = prompt(`Change task value`, task.value);
    if (newValue) updateTask({ ...task, value: newValue });
  };

  return (
    <li className="task">
      <Checkbox task={task} />
      <p>{task.value}</p>
      {currentPage === "0" && (
        <span onClick={() => navigate(`/lists/${parentList.id}`)}>
          {parentList.title}
        </span>
      )}
      <BiPencil onClick={handleUpdateValue} className={"pencil"} />
      <BiTrashAlt onClick={handleDelete} />
    </li>
  );
}

export default Task;
