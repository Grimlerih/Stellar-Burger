import React from 'react'
import styles from './Modal.module.css'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import {CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {createPortal} from 'react-dom'

export const Modal = ({setOpenModal, children}) => {
    const closeModal = () => {
        setOpenModal(false);
    }

  return createPortal(
    <>
        <ModalOverlay closeModalOverlay={closeModal}/>
        <div className={styles.container}>
        <button className={styles.closeButton}>
          <CloseIcon type="primary" />
        </button>
        {children}
        </div>
    </>, document.querySelector("#modal")
  )
}
