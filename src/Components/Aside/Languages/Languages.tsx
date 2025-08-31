import React from 'react';

import './styles.css';

import { languages } from '../../../data/about';

const Languages = () => {
  return (
    <div>
      <h2 className={'tittle'}>Languages</h2>
      {languages.map((el) => {
        return (
          <div className={'languagesWrapper'} key={el.language}>
            <p className={'language'}>{el.language}</p>
            <p className={'lvl'}>{el.lvl}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Languages;
