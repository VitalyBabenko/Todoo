import style from "./Categories.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useInput } from "../../hooks/useInput";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { nanoid } from "nanoid";
import { useContext, useEffect } from "react";
import { appContext } from "../../context";

export const Categories = () => {
  const { categories, setCategories } = useContext(appContext);
  const input = useInput("");

  const addCategory = (newValue) => {
    if (newValue) {
      setCategories([...categories, { id: nanoid(), title: newValue }]);
      input.setValue("");
    }
  };

  useEffect(() => {
    const addCategoryOnEnter = (e) => {
      if (e.key === "Enter") {
        addCategory(input.value);
      }
    };
    input.ref.current.addEventListener("keydown", addCategoryOnEnter);

    return () => {
      input.ref.current.removeEventListener("keydown", addCategoryOnEnter);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

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
        ref={input.ref}
        value={input.value}
        onChange={input.onChange}
        type="text"
        placeholder="New category"
      />

      <button onClick={() => addCategory(input.value)}>Add</button>
    </div>
  );
};
