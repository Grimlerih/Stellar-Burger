import React from "react";
import styles from "./OrderDetails.module.css";
import img from "../../images/done.png";
import PropTypes from "prop-types";

export const OrderDetails = ({ orderNumber }) => {
  return (
    <div className={styles.container}>
      <h2 className="text text_type_digits-large mb-8">{orderNumber}</h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img className="mb-15 mt-15" src={img} alt="Готово" />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};
