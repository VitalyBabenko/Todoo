import style from "./Burger.module.scss";

const Burger = ({ isOpen, toggle }) => {
  return (
    <label
      className={isOpen ? style.burgerChecked : style.burger}
      onClick={toggle}
    >
      <div className={style.lineTop}></div>
      <div className={style.lineMiddle}></div>
      <div className={style.lineBottom}></div>
    </label>
  );
};

export default Burger;
