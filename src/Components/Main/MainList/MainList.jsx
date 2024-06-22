import React from 'react'
import styles from './MainList.module.css'

const MainList = (props) => {
  return (
    <div className={styles.list}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.list.map((el) => {
        return (
          <div className={styles.descr} key={el.title + el.age}>
            <h3>{el.title}</h3>
            <p>{`${el.specialization} | ${el.age}`}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MainList
