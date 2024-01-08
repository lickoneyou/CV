import React, { useEffect } from 'react'
import styles from './MainCertificates.module.css'
import certificates from '../../../data/certificates'

const MainCertificates = (props) => {
  useEffect(() => {
    props.st('otherApp')
  })
  return (
    <main className={styles.MainCertificates}>
      {certificates.map((el) => {
        return (
          <div className={styles.certificateWrapper} key={el.title}>
            <a href={el.link} target="_blank" rel="noopener noreferrer">
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
