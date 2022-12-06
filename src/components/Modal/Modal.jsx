import {useEffect, useState} from 'react'
import styles from './Modal.module.css'
import {ModalOverlay} from '../ModalOverlay/ModalOverlay'
import {CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {createPortal} from 'react-dom'

export const Modal = ({setOpenModal, children}) => {

    const handlerCloseModal = () => {
        setOpenModal(false);
    }

    useEffect (() => {
        const buttonCloseModal = (event) => {
            if (event.key === "Escape") {
                handlerCloseModal();
            }
        }
        window.addEventListener("keydown", buttonCloseModal);
        return () => window.removeEventListener("keydown", buttonCloseModal);
    }, [])

  return createPortal(
    <>
        <ModalOverlay closeModalOverlay={handlerCloseModal}/>
        <div className={styles.container}>
          <button className={styles.closeButton} onClick={handlerCloseModal}>
            <CloseIcon type="primary" />
          </button>
        {children}
        </div>
    </>, document.querySelector("#modal")
  )
}
