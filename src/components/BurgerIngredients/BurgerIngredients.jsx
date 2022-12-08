import { useState, useRef } from "react";
import styles from "./BurgerIngredients.module.css";
import TabBurgerIngredients from "../TabBurgerIngredients/TabBurgerIngredients";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails ";

export function BurgerIngredients({ data }) {
  const [openModal, setOpenModal] = useState(false);
  const [ingridient, setIngridient] = useState();

  const refBuns = useRef();
  const refSauces = useRef();
  const refMain = useRef();

  const handleSwitch = (value) => {
    switch (value) {
      case "buns":
        refBuns.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "sauces":
        refSauces.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "main":
        refMain.current.scrollIntoView({ behavior: "smooth" });
        break;
      // no default
    }
  };

  const handleModalOpen = (item) => {
    setOpenModal(true);
    setIngridient(item);
  };

  return (
    <section className={`mb-10 ${styles.section}`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <TabBurgerIngredients handleSwitch={handleSwitch} />
      <div className={` ${styles.scrollbarContainer}`}>
        <article>
          <h2 className="text text_type_main-medium" ref={refBuns}>
            Булки
          </h2>
          <ul className={`mt-6  ${styles.ingredients}`}>
            {data
              .filter((obj) => {
                if (obj.type === "bun") {
                  return obj;
                }
              })
              .map((item) => (
                <li
                  className={styles.ingredientsItem}
                  key={item._id}
                  onClick={() => handleModalOpen(item)}
                >
                  <img
                    className={styles.img}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_main-default mr-2">
                      {item.price}
                    </p>
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
          <h2 className="text text_type_main-medium mt-10" ref={refSauces}>
            Соусы
          </h2>
          <ul className={`mt-6 mb-10 ${styles.ingredients}`}>
            {data
              .filter((obj) => {
                if (obj.type === "sauce") {
                  return obj;
                }
              })
              .map((item) => (
                <li
                  className={styles.ingredientsItem}
                  key={item._id}
                  onClick={() => handleModalOpen(item)}
                >
                  <img
                    className={styles.img}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_main-default mr-2">
                      {item.price}
                    </p>
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
          <h2 className="text text_type_main-medium mt-10" ref={refMain}>
            Начинки
          </h2>
          <ul className={`mt-6 mb-10 ${styles.ingredients}`}>
            {data
              .filter((obj) => {
                if (obj.type === "main") {
                  return obj;
                }
              })
              .map((item) => (
                <li
                  className={styles.ingredientsItem}
                  key={item._id}
                  onClick={() => handleModalOpen(item)}
                >
                  <img
                    className={styles.img}
                    src={item.image}
                    alt={item.name}
                  />
                  <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_main-default mr-2">
                      {item.price}
                    </p>
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
      </div>
      {openModal && ingridient && (
        <Modal setOpenModal={setOpenModal}>
          <IngredientDetails item={ingridient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.array,
};
