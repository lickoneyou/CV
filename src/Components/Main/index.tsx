import React, { useEffect } from 'react';

import './styles.css';

import type { MainProps } from '../../types';

import { profile, education, employmentHistory } from '../../data/about';

import MainProfile from './MainProfile';
import MainList    from './MainList';

const Main: React.FC<MainProps> = (props) => {

  useEffect(() => {
    props.st('App');
  });

  return (
    <main>
      <MainProfile title={profile[0].title} descr={profile[0].descr} />
      <MainList title="Education" list={education} />
      <MainList title="Employment History" list={employmentHistory} />
    </main>
  );
};

export default Main;
