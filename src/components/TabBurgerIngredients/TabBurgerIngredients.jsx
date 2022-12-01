import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

export function TabBurgerIngredients() {
  const [current, setCurrent] = React.useState("one");
  return (
    <div style={{ display: "flex" }}>
      <Tab value="one" active={current === "buns"} onClick={setCurrent}>
      Булки
      </Tab>
      <Tab value="two" active={current === "sauces"} onClick={setCurrent}>
      Соусы
      </Tab>
      <Tab value="three" active={current === "main"} onClick={setCurrent}>
      Начинки
      </Tab>
    </div>
  );
};
