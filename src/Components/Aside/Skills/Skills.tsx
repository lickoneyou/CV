import React from 'react';

import './styles.css';

import { skills } from '../../../data/about';

const Skills = () => {
  return (
    <div>
      <h2 className={'tittle'}>Skills</h2>
      {skills.map((skillsContainer, index) => (
        <div className={'skillsWrapper'} key={index}>
          {skillsContainer.map((skill, index) => {
            return <img className={'skillsImg'} key={index} src={skill} alt="skill" />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Skills;
