import React, { useEffect } from 'react'
import styles from './MainProjects.module.css'
import projects from '../../../data/projects'
import ControlledPagination from '../Pagination/ControledPagination'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import ProjectImage from '../ProjectImage/ProjectImage'


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
            <div className={styles.projectWrapper} key={el.title}>
              <a>
                <ProjectImage src={el.img} alt={el.title} github={el.github} link={el.link}/>
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
