import {useState} from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from '../TabBurgerIngredients/TabBurgerIngredients.module.css'

 const TabBurgerIngredients = () => {
  const [current, setCurrent] = useState("buns");

  const onClickTab = (value) => {
    setCurrent(value);
  }

  return (
    <div className={styles.container}>
      <Tab value="buns" active={current === "buns"} onClick={onClickTab}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === "sauces"} onClick={onClickTab}>
        Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={onClickTab}>
        Начинки
      </Tab>
    </div>
  );
}

export default TabBurgerIngredients;
