import React, { Suspense, useEffect, useRef, useState } from 'react'
import styles from './MainProjects.module.css'
import Loader from 'react-js-loader'

const projects = [
  {
    id: 1,
    title: '50 Projects 50 Days',
    link: 'https://lickoneyou.github.io/50projectsCarousel/',
    img: './images/projects/50projects50days.png',
  },
  {
    id: 2,
    title: 'React ToDo',
    link: 'https://lickoneyou.github.io/React_ToDo/build/',
    img: './images/projects/ToDoReact.png',
  },
  {
    id: 3,
    title: 'Canvas Classic Snake Game',
    link: 'https://lickoneyou.github.io/classicSnakeGame/',
    img: './images/projects/snakeGame.png',
  },
  {
    id: 4,
    title: 'React Cyberpunk',
    link: 'https://lickoneyou.github.io/Cyberpunk/cyberpunk/build/#',
    img: './images/projects/cyberpunk.png',
  },
  {
    id: 5,
    title: 'React|Redux Portfolio',
    link: 'https://lickoneyou.github.io/Portfolio/portfolio/build/',
    img: './images/projects/redux-reactPortfolio.png',
  },
  {
    id: 6,
    title: 'React|Redux Store',
    link: 'https://lickoneyou.github.io/Store/reduxstore/build/',
    img: './images/projects/store.png',
  },
  {
    id: 7,
    title: 'Museum',
    link: 'https://lickoneyou.github.io/Museum/',
    img: './images/projects/museum.png',
  },
  {
    id: 8,
    title: 'Go Games',
    link: 'https://lickoneyou.github.io/Gogames/build/',
    img: './images/projects/Gogames.png',
  },
  {
    id: 9,
    title: 'HOUSE OF GAMBLING',
    link: 'https://lickoneyou.github.io/HouseOfGambling/',
    img: './images/projects/HoG.png',
  },
  {
    id: 10,
    title: 'Shelter',
    link: 'https://lickoneyou.github.io/Shelter/',
    img: './images/projects/Shelter.png',
  },
  {
    id: 11,
    title: 'DART SERVICE MANAGER',
    link: 'https://lickoneyou.github.io/DART_SERVICE_MANAGER/',
    img: './images/projects/dart.png',
  },
  {
    id: 12,
    title: 'Momentum',
    link: 'https://lickoneyou.github.io/momentum/',
    img: './images/projects/momentum.png',
  },
  {
    id: 13,
    title: 'JS ToDo',
    link: 'https://lickoneyou.github.io/ToDo_JS/',
    img: './images/projects/ToDoJS.png',
  },
  {
    id: 14,
    title: 'Plants',
    link: 'https://lickoneyou.github.io/Plants/',
    img: './images/projects/plants.png',
  },
  {
    id: 15,
    title: 'Allods Online',
    link: 'https://lickoneyou.github.io/Allods_Online/',
    img: './images/projects/allods.png',
  },
]

const MainProjects = (props) => {
  const [loading, setLoading] = useState(true)
  const counter = useRef(0)
  const imageLoaded = () => {
    counter.current += 1
    if (counter.current >= projects.length) {
      setLoading(false)
    }
  }
  useEffect(() => {
    props.st('otherApp')
  })

  return (
    <main className={styles.MainProjects}>
      <div style={{ display: loading ? 'block' : 'none', margin: '0 auto' }}>
        <Loader bgColor="#000" />
      </div>
      {projects.map((el) => {
        return (
          <div
            className={styles.projectWrapper}
            key={el.title}
            style={{ display: loading ? 'none' : 'block' }}
          >
            <a href={el.link} target="_blank" rel="noopener noreferrer">
              <img onLoad={imageLoaded} src={el.img} alt={el.title} />
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
