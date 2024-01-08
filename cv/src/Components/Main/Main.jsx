import React, { useEffect } from 'react'
import MainProfile from './MainProfile/MainProfile'
import MainList from './MainList/MainList'
import './Main.module.css'

const profile = [
  {
    title: 'Profile',
    descr:
      "I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an entry-level position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.",
  },
]

const education = [
  {
    title: 'Belarusian-Russian University',
    specialization: 'Diploma in Taxes and Texation',
    age: '2013 - 2017',
  },
  {
    title: 'Rolling Scopes School',
    specialization: 'JAVASCRIPT/FRONT-END',
    age: '2022 - 2023',
  },
]

const employmentHistory = [
  {
    title: 'Bobruisk Brovar',
    specialization: 'Merchandiser',
    age: '2018',
  },
  {
    title: 'Yandex',
    specialization: 'Geodata specialist',
    age: '2018 - 2019',
  },
  {
    title: 'Raben',
    specialization: 'Warehouse worker ',
    age: '2020',
  },
  {
    title: 'Yandex',
    specialization: 'Support',
    age: '2020 - actual',
  },
]

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
