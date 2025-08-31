import React, { useMemo } from 'react';

import './styles.css';

import getAge from '../../handlers/getAge';

import type { ISectionProps } from '../../types';

import AsideSection from './AsideSection/AsideSection';
import Languages    from './Languages/Languages';
import Skills       from './Skills/Skills';

const Aside = () => {
  const sectionProps: ISectionProps[] = useMemo(() => {
    return [
      {
        title: 'Address',
        disc:  'Krichev, 213500, Mogilev Region, Belarus',
      },
      {
        title: 'Birth Date',
        disc:  `12/02/1996 (${getAge()})`,
      },
      {
        title: 'Nationality',
        disc:  'Belarusian',
      },
    ];
  }, []);

  return (
    <aside className={'aside'}>
      <section className={'aboutSection'}>
        {sectionProps.map((el) => (
          <AsideSection title={el.title} disc={el.disc} key={el.title} />
        ))}
      </section>
      <section className={'languagesSection'}>
        <Languages />
      </section>
      <section className={'skillsSection'}>
        <Skills />
      </section>
    </aside>
  );
};

export default Aside;
