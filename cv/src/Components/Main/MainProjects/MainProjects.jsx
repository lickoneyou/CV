import React, { useEffect, useRef, useState } from 'react'
import styles from './MainProjects.module.css'
import Loader from 'react-js-loader'
import projects from '../../../data/projects'

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
