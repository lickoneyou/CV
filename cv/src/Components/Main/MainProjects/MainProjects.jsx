import React, { useEffect } from 'react'
import styles from './MainProjects.module.css'

const projects = [
  {
    title: 'React ToDo',
    link: 'https://lickoneyou.github.io/React_ToDo/build/',
    img: './images/projects/ToDoReact.png',
  },
  {
    title: 'Canvas Classic Snake Game',
    link: 'https://lickoneyou.github.io/classicSnakeGame/',
    img: './images/projects/snakeGame.png',
  },
  {
    title: 'React Cyberpunk',
    link: 'https://lickoneyou.github.io/Cyberpunk/cyberpunk/build/#',
    img: './images/projects/cyberpunk.png',
  },
  {
    title: 'React|Redux Portfolio',
    link: 'https://lickoneyou.github.io/Portfolio/portfolio/build/',
    img: './images/projects/redux:reactPortfolio.png',
  },
  {
    title: 'React|Redux Store',
    link: 'https://lickoneyou.github.io/Store/reduxstore/build/',
    img: './images/projects/store.png',
  },
  {
    title: 'Museum',
    link: 'https://lickoneyou.github.io/Museum/',
    img: './images/projects/museum.png',
  },
  {
    title: 'Shelter',
    link: 'https://lickoneyou.github.io/Shelter/',
    img: './images/projects/Shelter.png',
  },
  {
    title: 'DART SERVICE MANAGER',
    link: 'https://lickoneyou.github.io/DART_SERVICE_MANAGER/',
    img: './images/projects/dart.png',
  },
  {
    title: 'Momentum',
    link: 'https://lickoneyou.github.io/momentum/',
    img: './images/projects/momentum.png',
  },
  {
    title: 'JS ToDo',
    link: 'https://lickoneyou.github.io/ToDo_JS/',
    img: './images/projects/ToDoJS.png',
  },
  {
    title: 'Plants',
    link: 'https://lickoneyou.github.io/Plants/',
    img: './images/projects/plants.png',
  },
  {
    title: 'Allods Online',
    link: 'https://lickoneyou.github.io/Allods_Online/',
    img: './images/projects/allods.png',
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
