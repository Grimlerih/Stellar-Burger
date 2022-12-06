import React from 'react'
import styles from './ModalOverlay.module.css'

export const ModalOverlay = ({closeModalOverlay}) => {
    
  return (
    <div className={styles.container} onClick={closeModalOverlay}></div>
  )
}
