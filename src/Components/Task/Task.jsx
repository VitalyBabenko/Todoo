import style from "./Task.module.scss";
import { BiTrashAlt, BiPencil } from "react-icons/bi";
import { Checkbox } from "../Checkbox/Checkbox";
import { useContext, useEffect } from "react";
import { appContext } from "../../context";
import { useNavigate, useParams } from "react-router-dom";

export const Task = ({ task }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const { categories, currentCategory, setCurrentCategory, setTasks } =
    useContext(appContext);
  const parent = categories.find((category) => category.id === task.listId);

  // const changeCategory = () => {
  //   navigate(`/${parent.title}`);
  // };

  useEffect(() => {
    setCurrentCategory(categories.find((category) => category.title === title));
  }, [title]);

  const changeValue = () => {
    const newValue = prompt();
    const updatedTask = { ...task, value: newValue };

    if (newValue) {
      setTasks((prev) =>
        prev.map((item) => (item.id === task.id ? updatedTask : item))
      );
    }
  };

  const removeTask = () => {
    setTasks((item) => item.filter((item) => item.id !== task.id));
  };

  return (
    <li className={style.task}>
      <Checkbox task={task} />

      <p>{task.value}</p>
      {/* TODO: change category onClick */}
      {/* {currentCategory.id === 0 &&
        {
          <span onClick={changeCategory}>{parent.title}</span>
        }} */}

      <BiPencil onClick={changeValue} className={style.pencil} />
      <BiTrashAlt onClick={removeTask} />
    </li>
  );
};
