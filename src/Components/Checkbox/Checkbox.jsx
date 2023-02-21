import { useContext } from "react";
import { ReactComponent as CheckIcon } from "../../assets/img/check.svg";
import { appContext } from "../../context";
import style from "./Checkbox.module.scss";

export const Checkbox = ({ task }) => {
  const { tasks, setTasks } = useContext(appContext);

  const handleUpdateDone = () => {
    const updatedTask = { ...task, done: !task.done };
    setTasks((prev) =>
      prev.map((item) => (item.id === task.id ? updatedTask : item))
    );
  };

  return (
    <div className={style.checkbox}>
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
};
