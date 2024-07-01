import React, { useEffect, useState } from 'react'
import Loader from 'react-js-loader'
import styles from './Image.module.css'

const Image = ({ src, alt, github, link }) => {
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
          <img className={styles.img} src={src} alt={alt} />{' '}
          <span className={styles.img__mask}>
            <b className={styles.title}>{alt}</b>
            {github && (
              <a
                href={github}
                className={styles.linkButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: '20px', marginRight: '10px' }}
                  src="./images/icons/githubBtn.png"
                  alt="icon"
                />
                GitHub
              </a>
            )}
            {link && (
              <a
                href={link}
                className={styles.linkButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: '20px' }}
                  src="./images/icons/deploy.png"
                  alt="icon"
                />
                Deploy
              </a>
            )}
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
