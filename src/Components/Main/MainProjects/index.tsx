import React, { useEffect, useMemo } from 'react';
import _                             from 'lodash';
import { useSelector }               from 'react-redux';

import './styles.css';

import type { MainProps } from '../../../types';
import type { StateData } from '../../../types';

import projects from '../../../data/projects';

import ControlledPagination from '../Pagination';
import ProjectImage         from '../ProjectImage';

const MainProjects: React.FC<MainProps> = (props) => {

  const page: number = useSelector((data: StateData) => data.pagesReducer.projectsPage);

  const chunkProjects = useMemo(() => {
    return _.chunk(projects, 6);
  }, [_, projects]);
  const myProjects    = useMemo(() => {
    return chunkProjects[page - 1];
  }, [chunkProjects, page]);

  useEffect(() => {
    props.st('otherApp');
  });

  return (
    <main>
      <div className={'MainProjects'}>
        {myProjects.map((el) => {
          return (
            <div className={'projectWrapper'} key={el.title}>
              <ProjectImage src={el.img} alt={el.title} github={el.github} link={el.link} />
            </div>
          );
        })}
      </div>
      <ControlledPagination pages={chunkProjects.length} action="CHANGE_PROJECT_PAGE" page="projectsPage" />
    </main>
  );
};

export default MainProjects;
