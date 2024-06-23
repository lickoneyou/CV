import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import styles from './Image.module.css'

const Image = ({ src, alt }) => {
  const [imageReady, setImageReady] = useState(false)

  useEffect(() => {
    setImageReady(true)
  }, [])

  return (
    <>
      {imageReady ? (
        <>
          <img className={styles.img} src={src} alt={alt} />{' '}
          <span className={styles.img__mask}>
            <b className={styles.title}>{alt}</b>
          </span>
        </>
      ) : (
        <div className={styles.loaderWrapper}>
          <Loader bgColor="#000" />
        </div>
      )}
    </>
  )
}

export default Image
