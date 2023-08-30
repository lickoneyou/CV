import React from 'react'
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
  props.st('otherApp')
  return <div>MainProjects</div>
}

export default MainProjects
