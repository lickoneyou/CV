import React from 'react'
import styles from './MainProfile.module.css'

const MainProfile = (props) => {
  return (
    <div className={styles.profile}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.descr}>{props.descr}</p>
    </div>
  )
}

export default MainProfile
