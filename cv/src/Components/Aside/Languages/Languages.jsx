import React from 'react'
import styles from './Languages.module.css'

const languages = [
  { language: 'Russian', lvl: 'native' },
  { language: 'English', lvl: 'А2' },
]

const Languages = () => {
  return (
    <div>
      <h2 className={styles.tittle}>Languages</h2>
      {languages.map((el) => {
        return (
          <div className={styles.languagesWrapper} key={el.language}>
            <p className={styles.language}>{el.language}</p>
            <p className={styles.lvl}>{el.lvl}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Languages
