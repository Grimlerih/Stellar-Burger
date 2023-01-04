import { useState, useContext } from "react";
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
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
        />
      </div>

      <div className={styles.priceContainer}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-2">7890</p>
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
