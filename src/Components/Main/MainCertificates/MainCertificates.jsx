import React, { useEffect } from 'react'
import styles from './MainCertificates.module.css'
import certificates from '../../../data/certificates'
import _ from 'lodash'
import { useSelector } from 'react-redux'
import ControlledPagination from '../Pagination/ControledPagination'
import CertificateImage from '../CertificateImage/CertificateImage'

const MainCertificates = (props) => {
  useEffect(() => {
    props.st('otherApp')
  })

  const chunkSertificates = _.chunk(certificates, 3)
  const page = useSelector((data) => data.pagesReducer.certificatesPage)
  const myProjects = chunkSertificates[page - 1]

  return (
    <main className={styles.MainCertificates}>
      <di className={styles.certificatesContainer}>
        {myProjects.map((el) => {
          return (
            <div className={styles.certificateWrapper} key={el.title}>
              <CertificateImage title={el.title} link={el.link} img={el.img} />
            </div>
          )
        })}
      </di>
      <ControlledPagination pages={chunkSertificates.length} page='certificatesPage' action='CHANGE_CERTIFICATES_PAGE' />
    </main>
  )
}

export default MainCertificates
