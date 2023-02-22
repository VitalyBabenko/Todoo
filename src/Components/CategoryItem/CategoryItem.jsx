import { useContext } from "react";
import style from "./CategoryItem.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { appContext } from "../../context";

export const CategoryItem = ({ category, setCategories, closeBurger }) => {
  const navigate = useNavigate();
  const { currentCategory, setCurrentCategory, setTasks } =
    useContext(appContext);

  const isCurrent = currentCategory.title === category.title;

  const handleRemove = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCategories((prev) => prev.filter((item) => item.id !== category.id));
    setTasks((prev) => prev.filter((item) => item.listId !== category.id));
    if (isCurrent) {
      setCurrentCategory({ id: 0, title: "All tasks" });
      navigate("/All tasks");
    }
  };

  const onCategoryClick = () => {
    setCurrentCategory(category);
    closeBurger();
  };

  return (
    <NavLink
      onClick={onCategoryClick}
      to={`/${category.title}`}
      className={isCurrent ? style.active : style.categoryItem}
    >
      <span>{category.title}</span>
      {category.id !== 0 && <BiX onClick={handleRemove} />}
    </NavLink>
  );
};
