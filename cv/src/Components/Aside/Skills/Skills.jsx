import React from 'react'
import styles from './Skills.module.css'
import { skills } from '../../../data/about'

const skillCheck = [1, 2, 3, 4]

const Skills = () => {
  return (
    <div>
      <h2 className={styles.tittle}>Skills</h2>
      {skills.map((el) => {
        return (
          <div className={styles.skillCheckWrapper} key={el.skill}>
            <div className={styles.skillPoints}>{el.skill}</div>
            <div className={styles.skillPoints}>
              {skillCheck.map((item) =>
                item <= el.lvl ? (
                  <div
                    className={styles.skillCheckColorBlack}
                    key={el.skill + item}
                  ></div>
                ) : (
                  <div
                    className={styles.skillCheckColorWhite}
                    key={el.skill + item}
                  ></div>
                ),
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
