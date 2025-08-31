import React from 'react';

import './styles.css';

interface MainProfileProps {
  title: string,
  descr: React.JSX.Element,
}

const MainProfile: React.FC<MainProfileProps> = (props) => {
  return (
    <div className={'profile'}>
      <h2 className={'title'}>{props.title}</h2>
      <div className={'descr'}>{props.descr}</div>
    </div>
  );
};

export default MainProfile;
