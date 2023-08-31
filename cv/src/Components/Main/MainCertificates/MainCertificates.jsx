import React, { useEffect } from 'react'
import styles from './MainCertificates.module.css'

const certificates = [
  {
    title: 'THE ROLLING SCOPES SCHOOL JS/FE PRE-SCHOOL 2022Q2 (JAVASCRIPT)',
    link: 'https://app.rs.school/certificate/ecw26weg',
    img: './images/certificates/preRs.png',
  },
  {
    title: 'THE ROLLING SCOPES SCHOOL JAVASCRIPT/FRONT-END 2022Q3 (JAVASCRIPT)',
    link: 'https://app.rs.school/certificate/d90px16p',
    img: './images/certificates/RS.png',
  },
  {
    title: 'JavaScript Algorithms and Data Structures Certification',
    link:
      'https://www.freecodecamp.org/certification/lickoneyou/javascript-algorithms-and-data-structures',
    img: './images/certificates/Algorithms.png',
  },
  {
    title: 'Responsive Web Design',
    link:
      'https://www.freecodecamp.org/certification/lickoneyou/responsive-web-design',
    img: './images/certificates/WD.png',
  },
]

const MainCertificates = (props) => {
  useEffect(() => {
    props.st('otherApp')
  }, [])
  return (
    <main className={styles.MainCertificates}>
      {certificates.map((el) => {
        return (
          <div className={styles.certificateWrapper} key={el.title}>
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

export default MainCertificates
