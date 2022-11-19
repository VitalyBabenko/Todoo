import { useState } from "react";
import "./Categories.scss";
import List from "../List/List";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { Link } from "react-router-dom";
import { listsAPI } from "../../service/ListsService";
import { CategoriesLoader } from "../Loader/Loader";

function Categories() {
  const [newList, setNewList] = useState("");
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);
  const { data: lists, isLoading: isListsLoading } =
    listsAPI.useFetchAllListsQuery("");
  const [createList] = listsAPI.useCreateListMutation("");

  const handleCreateList = () => {
    createList({ title: newList });
    setNewList("");
  };

  return (
    <div className="categories">
      {isListsLoading && <CategoriesLoader />}

      <Link to="/lists/all">
        <img src="/img/logo.svg" alt="logo" />
      </Link>

      <label
        className={isBurgerChecked ? "burgerChecked" : "burger"}
        onClick={() => setIsBurgerChecked(!isBurgerChecked)}
      >
        <div className="line-top"></div>
        <div className="line-middle"></div>
        <div className="line-bottom"></div>
      </label>

      <nav className={isBurgerChecked ? "active" : ""}>
        {lists.map((list) => (
          <List
            key={list.id}
            list={list}
            closeBurger={() => setIsBurgerChecked(false)}
          />
        ))}
      </nav>

      <Input
        value={newList}
        onChange={(e) => setNewList(e.target.value)}
        type="text"
        placeholder="New category"
      />

      <Button onClick={handleCreateList} title={"Add"} />
    </div>
  );
}

export default Categories;
