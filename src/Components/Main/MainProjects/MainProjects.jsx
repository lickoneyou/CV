import React, { useEffect } from 'react'
import styles from './MainProjects.module.css'
import projects from '../../../data/projects'
import ControlledPagination from '../Pagination/ControledPagination'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import Image from '../Image/Image'

const MainProjects = (props) => {
  useEffect(() => {
    props.st('otherApp')
  })

  const chunkProjects = _.chunk(projects, 6)
  const page = useSelector((data) => data.pagesReducer)
  const myProjects = chunkProjects[page - 1]

  return (
    <main>
      <div className={styles.MainProjects}>
        
        {myProjects.map((el) => {
          return (
            <div
              className={styles.projectWrapper}
              key={el.title}
            >
              <a href={el.link} target="_blank" rel="noopener noreferrer">
                <Image src={el.img} alt={el.title}/>
              </a>
            </div>
          )
        })}
      </div>
      <ControlledPagination pages={chunkProjects.length} />
    </main>
  )
}

export default MainProjects
