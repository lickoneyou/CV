import React from 'react';

import './styles.css';

interface MainListProps {
  title: string,
  list: {
    title: string,
    specialization: string,
    age: string,
  }[]
}

const MainList: React.FC<MainListProps> = (props) => {
  return (
    <div className={'list'}>
      <h2 className={'title'}>{props.title}</h2>
      {props.list.map((el) => {
        return (
          <div className={'descr'} key={el.title + el.age}>
            <h3>{el.title}</h3>
            <p>{`${el.specialization} | ${el.age}`}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MainList;
