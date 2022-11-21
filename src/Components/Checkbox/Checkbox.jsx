import { tasksAPI } from "../../service/TasksService";
import { ReactComponent as CheckIcon } from "../../assets/img/check.svg";
import "./Checkbox.scss";

function Checkbox({ task }) {
  const [updateTask] = tasksAPI.useUpdateTaskMutation("");

  const handleUpdateDone = () => {
    updateTask({ ...task, done: !task.done });
  };

  return (
    <div className="checkbox">
      <input
        id={task.id}
        checked={task.done}
        onChange={handleUpdateDone}
        type="checkbox"
      />
      <label htmlFor={task.id}>
        <CheckIcon />
      </label>
    </div>
  );
}

export default Checkbox;
