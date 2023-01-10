import { useState, useContext, useMemo, useReducer, useEffect } from "react";
import styles from "../BurgerConstructor/BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { BurgerContext } from "../services/burgerContext.js";

export function BurgerConstructor() {
  const [openModal, setOpenModal] = useState(false);
  const dataIngredients = useContext(BurgerContext);

  const initialArg = {
    buns: {},
    burgerIngredients: [],
    totalPrice: 0,
  };

  function reducer(state, action) {
    const buns = dataIngredients.find((item) => item.type === "bun");
    const burgerIngredients = dataIngredients.filter(
      (item) => item.type !== "bun"
    );

    const totalPrice =
      burgerIngredients.reduce((prev, current) => prev + current.price, 0) +
      state.buns.price * 2;

    switch (action.type) {
      case "initiate":
        return { ...state, burgerIngredients, buns };
      case "count":
        return { ...state, totalPrice };
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(reducer, initialArg);

  useEffect(() => {
    dispatch({ type: "initiate" });
    dispatch({ type: "count" });
  }, [dataIngredients]);

  return (
    <section className={styles.burgerConstSection}>
      <div className={styles.burgerConstContainer}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${state.buns.name} верх`}
          price={state.buns.price}
          thumbnail={state.buns.image_mobile}
        />
        <ul className={styles.burgerConstList}>
          {dataIngredients
            .filter((obj) => {
              if (obj.type !== "bun") {
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
          text={`${state.buns.name} (низ)`}
          price={state.buns.price}
          thumbnail={state.buns.image_mobile}
        />
      </div>

      <div className={styles.priceContainer}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-2">
            {state.totalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => setOpenModal(true)}
        >
          Нажми на меня
        </Button>
      </div>

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

// BurgerConstructor.propTypes = {
//   dataIngredients: PropTypes.array.isRequired,
// };
