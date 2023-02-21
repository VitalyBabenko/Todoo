import style from "./Categories.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useInput } from "../../hooks/useInput";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { appContext } from "../../context";

export const Categories = () => {
  const { categories, setCategories } = useContext(appContext);
  const input = useInput("");

  const addCategory = (newValue) => {
    if (input.value) {
      setCategories([...categories, { id: nanoid(), title: newValue }]);
      input.setValue("");
    }
  };

  return (
    <div className={style.categories}>
      <Link to="/All tasks">
        <Logo />
      </Link>

      <nav>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </nav>

      <input
        value={input.value}
        onChange={input.onChange}
        type="text"
        placeholder="New category"
      />

      <button onClick={() => addCategory(input.value)}>Add</button>
    </div>
  );
};
