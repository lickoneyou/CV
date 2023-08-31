import React, { useEffect } from 'react'
import styles from './MainProjects.module.css'

const projects = [
  {
    title: 'React ToDo',
    link: 'https://lickoneyou.github.io/React_ToDo/build/',
    img: './images/projects/ToDoReact.png',
  },
  {
    title: 'DART SERVICE MANAGER',
    link: 'https://lickoneyou.github.io/DART_SERVICE_MANAGER/',
    img: './images/projects/dart.png',
  },
  {
    title: 'JS ToDo',
    link: 'https://lickoneyou.github.io/ToDo_JS/',
    img: './images/projects/ToDoJS.png',
  },
]

const MainProjects = (props) => {
  useEffect(() => {
    props.st('otherApp')
  }, [])
  return (
    <main className={styles.MainProjects}>
      {projects.map((el) => {
        return (
          <div className={styles.projectWrapper} key={el.title}>
            <a href={el.link} target="_blank">
              <img src={el.img} alt={el.title} />
              <span className={styles.img__mask}>
                <b className={styles.title}>{el.title}</b>
              </span>
            </a>
          </div>
        )
      })}
    </main>
  )
}

export default MainProjects
