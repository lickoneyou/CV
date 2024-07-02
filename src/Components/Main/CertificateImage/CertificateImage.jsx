import React, { useEffect, useState } from 'react'
import styles from './CertificateImage.module.css'
import Loader from 'react-js-loader'

const CertificateImage = ({ title, link, img }) => {
  const [imageReady, setImageReady] = useState(false)

  useEffect(() => {
    const fn = async () => {
      await fetch('src')
      setImageReady(true)
    }
    fn()
  }, [])

  return (
    <>
      {imageReady ? (
        <>
          
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img className={styles.img} src={img} alt={title} />
              <span className={styles.img__mask}>
                <b className={styles.title}>{title}</b>
              </span>
            </a>
        </>
      ) : (
        <div className={styles.loaderWrapper}>
          <Loader bgColor="#000" />
        </div>
      )}
    </>
  )
}

export default CertificateImage
