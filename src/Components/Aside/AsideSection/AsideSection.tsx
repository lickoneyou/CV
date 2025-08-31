import React from 'react';

import './styles.css';

import type { ISectionProps } from '../../../types';

const AsideSection = (props: ISectionProps) => {
  return (
    <div className={'asideSection'}>
      <h3>{props.title}</h3>
      <p className={'disc'}>{props.disc}</p>
    </div>
  );
};

export default AsideSection;
