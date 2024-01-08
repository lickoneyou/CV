import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.myPhoto} src="./images/ya.jpg" alt="myPhoto"></div>
      <div className={styles.contactsWrapper}>
        <div>
          <h1>Kiryl Khomchanka</h1>
          <h3>Front-End Wed Developer</h3>
        </div>
        <div className={`${styles.dispFlex} ${styles.contacts}`}>
          <div className={`${styles.dispFlex} ${styles.contactsEmail}`}>
            <img
              className={styles.contactsIcon}
              src="./images/icons/mail.png"
              alt="emailIcon"
            />
            <p>dickdurex265@gmail.com</p>
          </div>
          <div className={`${styles.dispFlex} ${styles.contactsPhone}`}>
            <img
              className={styles.contactsIcon}
              src="./images/icons/phone.png"
              alt="phoneIcon"
            />
            <p>+375 (29) 562 82 80</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
