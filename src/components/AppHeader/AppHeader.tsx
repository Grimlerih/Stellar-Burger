import React from 'react'
import styles from './AppHeader.module.css'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <button className={`pt-4 pb-4 pl-5 pr-5 ${styles.navButton}`}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default">Конструктор</p>
            </button>
          <button className={`pt-4 pb-4 pl-5 pr-5 ${styles.navButton}`}>
          <ListIcon type="primary" />
            <p className="text text_type_main-default">Лента заказов</p>
            </button>
        </nav>
        <Logo/>
        <button className={`pt-4 pb-4 pl-5 pr-5 ${styles.navButton} ${styles.profileButton}`}>
          <ProfileIcon type="primary" />
            <p className="text text_type_main-default">Личный кабинет</p>
            </button>
      </div>
    </header>
  )
}
