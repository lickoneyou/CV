import React from 'react'
import styles from './Skills.module.css'
import { skills } from '../../../data/about'

const Skills = () => {
  return (
    <div>
      <h2 className={styles.tittle}>Skills</h2>
      {skills.map((skillsContainer, index) => (
        <div className={styles.skillsWrapper} key={index}>
          {skillsContainer.map((skill) => {
            return <img className={styles.skillsImg} src={skill} alt="skill" />
          })}
        </div>
      ))}
    </div>
  )
}

export default Skills
