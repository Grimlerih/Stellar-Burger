import React from "react";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';

export function BurgerConstructor({ data }) {
  return (
    <section className={styles.burgerConstSection}>
      <div className={styles.burgerConstContainer}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={"Краторная булка N-200i (верх)"}
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
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
                <DragIcon type="primary"/>
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
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
      </div>

      <div className={styles.priceContainer}>
      <div className={styles.price}>
        <p className="text text_type_digits-medium mr-2">7890</p>
        <CurrencyIcon type="primary"  />
        </div>
        <Button htmlType="button" type="primary" size="large">
        Нажми на меня
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
}