import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { appContext } from "../../context";
import { useInput } from "../../hooks/useInput";
import { Task } from "../Task/Task";
import style from "./Tasks.module.scss";

export const Tasks = () => {
  const { currentCategory, tasks, setTasks } = useContext(appContext);
  const input = useInput("");

  const getCurrentTasks = () => {
    if (tasks) {
      return tasks.filter((task) => {
        if (currentCategory.id === 0) return true;
        return task.listId === currentCategory.id;
      });
    }

    return [];
  };

  const createTask = () => {
    const newTask = {
      id: nanoid(),
      listId: currentCategory.id,
      done: false,
      value: input.value,
    };
    if (input.value) {
      setTasks([...tasks, newTask]);
      input.setValue("");
    }
  };

  useEffect(() => {
    const addCategoryOnEnter = (e) => {
      if (e.key === "Enter") {
        createTask(input.value);
      }
    };
    input.ref.current.addEventListener("keydown", addCategoryOnEnter);

    return () => {
      input.ref.current.removeEventListener("keydown", addCategoryOnEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

  return (
    <div className={style.tasks}>
      <h1>{currentCategory.title}</h1>

      <input
        ref={input.ref}
        value={input.value}
        onChange={input.onChange}
        placeholder={`Create task on '${currentCategory.title}' category`}
      />

      {input.value && <button onClick={createTask}>Create new task</button>}

      <hr />

      <ul>
        {getCurrentTasks().map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};
