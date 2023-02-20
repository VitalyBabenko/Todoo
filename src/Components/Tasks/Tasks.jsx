import { nanoid } from "nanoid";
import { useContext } from "react";
import { appContext } from "../../context";
import { useInput } from "../../hooks/useInput";
import { Task } from "../Task/Task";
import style from "./Tasks.module.scss";

export const Tasks = () => {
  const { currentCategory, tasks, setTasks } = useContext(appContext);
  const input = useInput("");

  const currentTasks = tasks.filter((task) => {
    if (currentCategory.id === 0) return true;
    return task.listId === currentCategory.id;
  });

  const createTask = () => {
    const newTask = {
      id: nanoid(),
      listId: currentCategory.id,
      done: false,
      value: input.value,
    };
    setTasks([...tasks, newTask]);
    input.setValue("");
  };

  return (
    <div className={style.tasks}>
      <h1>{currentCategory.title}</h1>

      <input
        value={input.value}
        onChange={input.onChange}
        placeholder={`Create task on '${currentCategory.title}' category`}
      />

      {input.value && <button onClick={createTask}>Create new task</button>}

      <hr />

      <ul>
        {currentTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
