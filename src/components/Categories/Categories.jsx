import style from "./Categories.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useInput } from "../../hooks/useInput";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { nanoid } from "nanoid";
import { useContext, useState } from "react";
import { appContext } from "../../context";
import { useToggle } from "../../hooks/useToggle";
import Burger from "../Burger/Burger";

export const Categories = () => {
  const [isBurgerOpen, toggle] = useToggle();
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);
  const { categories, setCategories } = useContext(appContext);
  const input = useInput("");

  const addCategory = (e) => {
    e.preventDefault();
    if (input.value) {
      setCategories([...categories, { id: nanoid(), title: input.value }]);
      input.setValue("");
    }
  };

  return (
    <div className={style.categories}>
      <Link to="/All tasks">
        <Logo />
      </Link>
      <Burger isOpen={isBurgerOpen} toggle={toggle} />

      <nav className={isBurgerOpen ? style.active : null}>
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            setCategories={setCategories}
            closeBurger={toggle}
          />
        ))}
      </nav>

      <form onSubmit={addCategory}>
        <input
          value={input.value}
          onChange={input.onChange}
          placeholder="New category"
        />
      </form>

      <button onClick={addCategory}>Add</button>
    </div>
  );
};
