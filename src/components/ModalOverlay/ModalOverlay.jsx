import React from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

export const ModalOverlay = ({ closeModalOverlay }) => {
  return <div className={styles.container} onClick={closeModalOverlay}></div>;
};

ModalOverlay.propTypes = {
  closeModalOverlay: PropTypes.func.isRequired,
};
