import React, { useEffect, useRef, useState } from 'react'
import styles from './MainCertificates.module.css'
import certificates from '../../../data/certificates'
import Loader from 'react-js-loader'

const MainCertificates = (props) => {
  const [loading, setLoading] = useState(true)
  const counter = useRef(0)
  const imageLoaded = () => {
    counter.current += 1
    if (counter.current >= certificates.length) {
      setLoading(false)
    }
  }
  useEffect(() => {
    props.st('otherApp')
  })
  return (
    <main className={styles.MainCertificates}>
      <div style={{ display: loading ? 'block' : 'none', margin: '250px auto' }}>
        <Loader bgColor="#000" />
      </div>
      {certificates.map((el) => {
        return (
          <div
            className={styles.certificateWrapper}
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

export default MainCertificates
