import React from 'react'
import styles from './AsideSection.module.css'

const AsideSection = (props) => {
  return (
    <div className={styles.asideSection}>
    <h3>{props.title}</h3>
    <p>{props.disc}</p>
    </div>
  )
}

export default AsideSection