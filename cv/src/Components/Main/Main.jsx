import React, { useEffect } from 'react'
import MainProfile from './MainProfile/MainProfile'
import MainList from './MainList/MainList'
import './Main.module.css'
import { profile, education, employmentHistory } from '../../data/about'

const Main = (props) => {
  useEffect(() => {
    props.st('App')
  })
  return (
    <main>
      <MainProfile title={profile[0].title} descr={profile[0].descr} />
      <MainList title="Education" list={education} />

      <MainList title="Employment History" list={employmentHistory} />
    </main>
  )
}

export default Main
