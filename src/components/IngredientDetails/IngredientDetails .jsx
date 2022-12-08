import React from "react";
import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";

export const IngredientDetails = ({ item }) => {
  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-large ${styles.title}`}>
        Детали ингридиента
      </h2>
      <img className={styles.img} src={item.image_large} alt={item.name} />
      <p className="text text_type_main-medium mb-8">{item.name}</p>
      <ul
        className={`${styles.IngredientList} text text_type_main-default text_color_inactive`}
      >
        <li className={styles.Ingredient}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default">{item.calories}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </p>
          <p className="text text_type_digits-default">{item.proteins}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </p>
          <p className="text text_type_digits-default">{item.fat}</p>
        </li>
        <li>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default">{item.carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  item: PropTypes.object,
};
