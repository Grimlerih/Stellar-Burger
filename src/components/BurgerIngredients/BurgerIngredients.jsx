import React from "react";
import styles from "./BurgerIngredients.module.css";
import { TabBurgerIngredients } from "../TabBurgerIngredients/TabBurgerIngredients";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function BurgerIngredients({ data }) {
  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-5">Соберите бургер</h1>
      {/* <TabBurgerIngredients/> */}

      <article className="mt-10">
        <h2 className="text text_type_main-medium mt-10">Булки</h2>
        <ul className={`mt-6 mb-10 ${styles.ingredients}`}>
          {data
            .filter((obj) => {
              if (obj.type === "bun") {
                return obj;
              }
            })
            .map((item) => (
              <li className={styles.ingredientsItem}>
                <img className={styles.img} src={item.image} alt={item.name} />
                <div className={`${styles.price} mt-1 mb-1`}>
                  <p className="text text_type_main-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`text text_type_main-default ${styles.ingredientsName}`}
                >
                  {item.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
        </ul>
      </article>

      <article className="mt-10">
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <ul className={`mt-6 mb-10 ${styles.ingredients}`}>
          {data
            .filter((obj) => {
              if (obj.type === "sauce") {
                return obj;
              }
            })
            .map((item) => (
              <li className={styles.ingredientsItem}>
                <img className={styles.img} src={item.image} alt={item.name} />
                <div className={`${styles.price} mt-1 mb-1`}>
                  <p className="text text_type_main-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`text text_type_main-default ${styles.ingredientsName}`}
                >
                  {item.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
        </ul>
      </article>

      <article className="mt-10">
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <ul className={`mt-6 mb-10 ${styles.ingredients}`}>
          {data
            .filter((obj) => {
              if (obj.type === "main") {
                return obj;
              }
            })
            .map((item) => (
              <li className={styles.ingredientsItem}>
                <img className={styles.img} src={item.image} alt={item.name} />
                <div className={`${styles.price} mt-1 mb-1`}>
                  <p className="text text_type_main-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p
                  className={`text text_type_main-default ${styles.ingredientsName}`}
                >
                  {item.name}
                </p>
                <Counter count={0} size="default" />
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
}
