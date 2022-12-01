import React from "react";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function BurgerConstructor({ data }) {
  return (
    <section className={styles.burgerConstSection}>
      <div className={styles.burgerConstContainer}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={""}
          price={200}
          thumbnail=""
        />
        <ul className={styles.burgerConstList}>
          {data
            .filter((obj) => {
              if (obj.type === "sauce" || "main") {
                return obj;
              }
            })
            .map((item) => (
              <li key={item._id} className={styles.burgerConstItem}>
                <DragIcon type="primary" />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            ))}
        </ul>

        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="dqdq"
          price={200}
          thumbnail="dwqdqw"
        />
      </div>
    </section>
  );
}
