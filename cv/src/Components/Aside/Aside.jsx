import React from 'react'
import AsideSection from './AsideSection/AsideSection'
import Languages from './Languages/Languages'
import Skills from './Skills/Skills'
import styles from './Aside.module.css'

const sectionProps = [
  { title: 'Address', disc: 'Krichev, 213500, Mogilev Region, Belarus' },
  { title: 'Birth Date', disc: '12/02/1996' },
  { title: 'Nationality', disc: 'Belarusian' },
]

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <section className={styles.aboutSection}>
        {sectionProps.map((el) => (
          <AsideSection title={el.title} disc={el.disc} key={el.title} />
        ))}
      </section>
      <section className={styles.languagesSection}>
        <Languages />
      </section>
      <section className={styles.skillsSection}>
        <Skills />
      </section>
    </aside>
  )
}

export default Aside
